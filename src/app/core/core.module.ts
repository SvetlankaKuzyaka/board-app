import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule, MatButtonModule } from "@angular/material";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule {}
