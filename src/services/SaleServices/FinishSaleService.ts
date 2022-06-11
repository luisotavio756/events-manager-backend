import Session from 'models/Session';
import Ticket from 'models/Ticket';
import Sale from 'models/Sale';
import AppError from '../../errors/AppError';
import knex from '../../database/connection';

interface IRequest {
  id_usuario?: number;
  id_sessao: number;
  nr_protocolo: number;
  ds_formapagamento: string;
  ds_tipovenda: string;
  ds_nomecliente: string;
  ds_tipodocumento: string;
  nr_documento: string;
  tickets: Array<Ticket>;
}

interface IResponse extends Sale {
  amountRate: number;
}

export default {
  async run({
    id_usuario,
    id_sessao,
    ds_formapagamento,
    ds_nomecliente,
    ds_tipodocumento,
    ds_tipovenda,
    nr_documento,
    nr_protocolo,
    tickets,
  }: IRequest): Promise<IResponse | void> {
    const trx = await knex.transaction();

    const findSession = await knex<Session>('tb_sessoes').where(
      'id_sessao',
      id_sessao,
    );

    if (!findSession.length) {
      throw new AppError('Sessão não encontrada.');
    }

    if (id_usuario) {
      const findUser = await knex<Sale>('tb_usuarios').where(
        'id_usuario',
        id_usuario,
      );

      if (!findUser.length) {
        throw new AppError('Usuário não encontrado.');
      }
    }

    const listOfSeats = tickets.map(ticket => ticket.ds_assento);

    const findTickets = await knex<Ticket>('tb_ingressos')
      .where({
        id_sessao,
      })
      .whereIn('ds_assento', listOfSeats);

    if (findTickets.length > 0) {
      const listOfSeatsDescription = findTickets
        .map(ticket => ticket.ds_assento)
        .join(', ');

      throw new AppError(
        `Assento(s) ${listOfSeatsDescription} já reservado(s).`,
        406,
      );
    }

    const ticketsWithPaymentTypeApplied = tickets.map<Ticket>(ticket => {
      const paymentType = ticket.ds_tipo;
      const totalValue = findSession[0].nr_valorInteira;

      return {
        ...ticket,
        nr_valor: paymentType === 'Meia' ? totalValue / 2 : totalValue,
      };
    });

    const saleAmount = ticketsWithPaymentTypeApplied.reduce(
      (accumulator, ticket) => accumulator + (ticket?.nr_valor || 0),
      0,
    );

    try {
      const saleData = {
        ds_formapagamento,
        ds_nomecliente,
        ds_tipodocumento,
        ds_tipovenda,
        dt_venda: new Date(),
        id_usuario,
        nr_documento,
        nr_protocolo,
        nr_valorvenda: saleAmount * 1.05,
      };

      const sale: Sale[] = await trx('tb_venda')
        .returning('*')
        .insert(saleData);
      const insertedSale = sale[0];

      const parsedTickets = ticketsWithPaymentTypeApplied.map(ticket => ({
        ...ticket,
        id_venda: insertedSale.id_venda,
        id_sessao,
      }));

      const insertedTickets: Ticket[] = await trx('tb_ingressos')
        .returning('*')
        .insert(parsedTickets);

      await trx.commit();

      return {
        ...insertedSale,
        amountRate: saleAmount * 0.05,
        tickets: insertedTickets,
      };
    } catch (error) {
      await trx.rollback();

      throw new AppError('Erro ao tentar finalizar venda', 500);
    }
  },
};
