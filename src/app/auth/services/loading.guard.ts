import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router) { }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['./login']);
      return false;
    }
    return true;
  }
}
