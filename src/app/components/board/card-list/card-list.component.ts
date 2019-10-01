import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() public cardList: CardModel.ICardList
  @Input() public searchCriterion: string
  @Output() public removeCard  = new EventEmitter<CardModel.ICard>();

  public onRemoveCard(card : CardModel.ICard) {
    this.removeCard.emit(card);
  }

}
