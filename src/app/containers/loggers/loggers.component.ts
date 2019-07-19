import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-loggers',
  templateUrl: './loggers.component.html',
  styleUrls: ['./loggers.component.scss']
})
export class LoggersComponent implements OnInit {
  messages: string[] = [];

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.messageEmitter$
      .subscribe(newMessage => this.messages.push(newMessage));
  }

  clearLogs(): void {
    this.messages = [];
  }
}
