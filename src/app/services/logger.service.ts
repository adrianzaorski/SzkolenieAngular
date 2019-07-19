import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messageEmitter$ = new EventEmitter<string>();

  emitMessage(message: string): void {
    this.messageEmitter$.emit(message);
  }
}
