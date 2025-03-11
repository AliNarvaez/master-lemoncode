import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    if (username === 'master@lemoncode.net' && password === '12345678') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      return of<boolean>(true);
    } else {
      return of<boolean>(false);
    }
  }

  isLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn !== null && isLoggedIn === 'true';
  }
  
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
