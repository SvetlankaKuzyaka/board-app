import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public loginCheck: boolean;

  constructor(private loginService: LoginService) { }

  public ngOnInit() {
    this.loginService.loginState$.subscribe((data) => {
      this.loginCheck = data.token ? true : false;
    });
  }

}
