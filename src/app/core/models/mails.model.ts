export interface Mail {
  id: number
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  sentAt: string;
  folder?: 'inbox' | 'sent' | 'trash';
}
