import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
import { ToolbarComponent } from './components/board/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/board/card-list/card-list.component';
import { CardItemComponent } from './components/board/card-list/card-item/card-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CardBackgroundDirective } from './directives/card-background.directive';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    CardBackgroundDirective
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
    MatCardModule
  ],
  exports: [
    BoardComponent
  ],
  providers: [DataService]
})
export class BoardModule { }
