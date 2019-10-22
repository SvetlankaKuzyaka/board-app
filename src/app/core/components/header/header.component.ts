import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../../../auth/services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loginCheck: boolean;
  public userName: string;

  constructor(private loginService: LoginService, private router: Router) {}

  public ngOnInit() {
    this.loginService.loginState$.subscribe((data) => {
      this.loginCheck = data.token ? true : false;
      this.userName = data.userName;
    });
  }

  public onLogin() {
    if (this.loginService.isLoggedIn()) {
      this.loginService.setLogin("", false);
    }
    this.router.navigate(['./login']);
  }
}
