import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { MainDataService } from '../../services/main-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loggerService: LoggerService,
    private mainDataService: MainDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.mainDataService.authenticate(this.loginForm.value)
        .subscribe(apiResponse => {
            this.loggerService.emitMessage('Zalogowano, przyznano token');
            localStorage.setItem('token', apiResponse.id_token);
            this.mainDataService.getHotels().subscribe(res => {
              this.loggerService.emitMessage(JSON.stringify(res));
            });
          },
          error1 => this.loggerService.emitMessage('error'));
    }
  }
}
