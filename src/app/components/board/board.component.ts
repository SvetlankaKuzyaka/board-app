import { Component } from '@angular/core';
import { ICardList, ICard } from '../../models/Card';
import fake_data from './fake_data';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public listCardList : ICardList[] = [...fake_data];
  public searchCriterion : string = "";

  public onSearch(criterion: string) {
    this.searchCriterion = criterion;
  }
  public onRemoveCard(card : ICard) {
    this.listCardList.forEach(cardList => {
      const index = cardList.cards.findIndex(cardItem => cardItem.id === card.id);
      if (index !== -1) cardList.cards.splice(index, 1);
    })
  }
}
