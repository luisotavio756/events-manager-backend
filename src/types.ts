export interface ISeatAvailability {
  seat: number;
  seatKey: string;
  available: boolean;
}

export interface ITicket {
  ds_assento: string;
  ds_tipo: string;
  nr_valor: number;
}
