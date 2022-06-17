import Session from './Session';

export default class Event {
  public id_evento?: number;

  public nm_evento: string;

  public ds_evento: string;

  public dt_cadastro: Date;

  public ds_tipoevento: string;

  public sessoes: Session[];
}
