import { Injectable, signal } from '@angular/core';
import { MessageSeverity } from '../../models/message.model';
import { Message } from 'postcss';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  #messageSignal = signal<Message | null>(null);

  //Public Signal
  message = this.#messageSignal.asReadonly();

  showMessage(text: string, severity: MessageSeverity) {
    this.#messageSignal.set({
      plugin: '',
      type: '',
      text,
      severity,
    });

    // Set timeout to clear the message after 3 seconds
    setTimeout(() => {
      this.clear();
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  clear() {
    this.#messageSignal.set(null);
  }

  constructor() {}
}
