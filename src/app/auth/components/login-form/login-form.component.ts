import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private loginService: LoginService, private router: Router) {}

  public ngOnInit() {
    this.loginService.loginState$.subscribe((data) => {
      if (data.token) this.router.navigate(['./board']);
    });
  }

  public onLoginCheck() {
    if (this.username && this.password) {
      this.loginService.setLogin(this.username, true);
    }
  }

}
