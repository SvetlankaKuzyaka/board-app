import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
// import fake_data from './fake_data';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // public listCardList : ICardList[] = [...fake_data];
  public listCardList : CardModel.ICardList[];
  public searchCriterion : string = "";

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.listCardList = this.dataService.data;
  }

  public onSearch(criterion: string) {
    this.searchCriterion = criterion;
  }

  public onRemoveCard(card : CardModel.ICard) {
    this.listCardList.forEach(cardList => {
      const index = cardList.cards.findIndex(cardItem => cardItem.id === card.id);
      if (index !== -1) cardList.cards.splice(index, 1);
    })
  }
}
