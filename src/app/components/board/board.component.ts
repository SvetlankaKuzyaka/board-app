import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public listCardList : CardModel.ICardList[];
  public searchCriterion : string = "";

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.listCardList = this.dataService.getData();
  }

  public onSearch(criterion: string) {
    this.searchCriterion = criterion;
  }

  public onRemoveCard({ list, card }) {
    this.dataService.removeCard(list, card);
  }

}
