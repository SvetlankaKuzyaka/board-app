import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatInputModule
} from "@angular/material";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginService } from "./services/login.service";
import { LoadingGuard } from "./services/loading.guard";


@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AuthModule { }
