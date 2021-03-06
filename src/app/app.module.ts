import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule
} from "@angular/material";
import { CoreModule } from "./core/core.module";
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
