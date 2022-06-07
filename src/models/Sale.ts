import Ticket from './Ticket';

export default class Sale {
  public id_venda?: number;

  public id_usuario?: number;

  public nr_protocolo: number;

  public nr_valorvenda: number;

  public dt_venda: string;

  public ds_formapagamento: string;

  public ds_tipovenda: string;

  public ds_nomecliente: string;

  public ds_tipodocumento: string;

  public nr_documento: string;

  public tickets?: Array<Ticket>;
}
