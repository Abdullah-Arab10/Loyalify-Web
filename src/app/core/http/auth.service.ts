import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/auth.model';
import { AUTH_URL } from '../../shared/constants/global.constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  loggedInObservable = this.loggedIn$.asObservable();
  constructor(private _http: HttpClient) {
    this.isAuthenticatedUser();
  }

  login(loginForm: LoginModel) {
    return this._http.post(AUTH_URL + 'login', loginForm);
  }
  isAuthenticatedUser() {
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    if (token && role == 'Admin') {
      this.loggedIn$.next(true);
      return true;
    } else {
      this.loggedIn$.next(false);
      return false;
    }
  }
}
