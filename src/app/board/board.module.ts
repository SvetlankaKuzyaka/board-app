import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoardRoutingModule } from "./board-routing.module";
import { FormsModule } from "@angular/forms";
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { BoardComponent } from "./components/board/board.component";
import { CardListComponent } from "./components/board/card-list/card-list.component";
import { CardItemComponent } from "./components/board/card-list/card-item/card-item.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { CardBackgroundDirective } from "./directives/card-background.directive";
import { DataService } from "./services/data.service";
import { BoardPageComponent } from "./pages/board-page/board-page.component";
import { EditPageComponent } from "./pages/edit-page/edit-page.component";
import { CardFormComponent } from "./components/card-form/card-form.component";
import { CreatePageComponent } from './pages/create-page/create-page.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    CardBackgroundDirective,
    BoardPageComponent,
    EditPageComponent,
    CardFormComponent,
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class BoardModule {}
