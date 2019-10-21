import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "../../../auth/services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {}

  public onLogin() {
    if (this.loginService.isLoggedIn()) {
      this.loginService.setLogin("", false);
    }
    this.router.navigate(['./login'], { relativeTo: this.route });
  }
}
