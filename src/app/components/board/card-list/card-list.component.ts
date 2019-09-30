import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICardList, ICard } from '../../../models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() public cardList: ICardList
  @Input() public searchCriterion: string
  @Output() public removeCard  = new EventEmitter<ICard>();

  public onRemoveCard(card : ICard) {
    this.removeCard.emit(card);
  }

}
