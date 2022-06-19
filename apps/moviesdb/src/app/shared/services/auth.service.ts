import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '@tim/api-interfaces';
import { BehaviorSubject } from 'rxjs';

const AUTHENTICATION_KEY = '@tim:moviesdb';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject(
    this.getIsAuthenticated() || false
  );
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(private router: Router) {}

  login(_userInfo: UserInfo) {
    this.setIsAuthenticated(true);
    this.isAuthenticated.next(true);
    this.router.navigateByUrl('/movies');
  }

  logout() {
    this.setIsAuthenticated(false);
    this.isAuthenticated.next(false);
    this.router.navigateByUrl('/login');
  }

  private getIsAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem(AUTHENTICATION_KEY) || '{}');
  }

  private setIsAuthenticated(isAuthenticated: boolean) {
    localStorage.setItem(AUTHENTICATION_KEY, JSON.stringify(isAuthenticated));
  }
}
