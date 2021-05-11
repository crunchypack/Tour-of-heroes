import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  /**
   * Add message to Array of Strings
   * @param message 
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * Empties the Array
   */
  clear() {
    this.messages = [];
  }
}