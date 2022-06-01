import SessionDTO from './SessionDTO';

export default interface EventDTO {
  description: string;
  eventType: string;
  sessions: SessionDTO[];
}
