import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {
  apiUrl = 'http://185.157.80.88:9000/api';

  constructor(private http: HttpClient) {
  }

  authenticate(user: {login: string, password: string}): Observable<{id_token: string}> {
    return this.http.post<{id_token: string}>(`${this.apiUrl}/authenticate`, {
      username: user.login,
      password: user.password,
      rememberMe: true
    });
  }

  getHotels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/hotels`);
  }
}
