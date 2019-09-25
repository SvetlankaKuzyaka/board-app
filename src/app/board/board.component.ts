import { Component, OnInit } from '@angular/core';
import { CardListComponent } from '../card-list/card-list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  // public readonly items : CardListComponent[] = [
  //   {    },
  //   {    },
  //   {    },
  // ];
  public searchCriterion : string;
  public onSearch(criterion: string) {
    this.searchCriterion = criterion;
  }
}
