export default class Ticket {
  public id_ingresso?: number;

  public id_venda?: number;

  public id_sessao: number;

  public ds_assento: string;

  public ds_tipo: 'Inteira' | 'Meia';

  public nr_valor?: number;
}
