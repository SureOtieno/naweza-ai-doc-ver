export interface Mail {
  id: number
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  sentOn: string;
  folder?: 'inbox' | 'sent' | 'trash';
}
