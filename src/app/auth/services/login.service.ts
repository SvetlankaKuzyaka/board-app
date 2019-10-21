import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginState$: BehaviorSubject<{userName: string, token: boolean}>;

  constructor() {
    const login = JSON.parse(localStorage.getItem('loginState'));
    const initialState = login ? login : {userName: "", token: false};
    this.loginState$ = new BehaviorSubject({...initialState});
  };

  public setLogin(userName: string, token: boolean): void {
    this.loginState$.next({userName, token});
    localStorage.setItem('loginState', JSON.stringify(this.loginState$.getValue()));
  }

  public isLoggedIn() {
    return this.loginState$.getValue().token;
  }

}
