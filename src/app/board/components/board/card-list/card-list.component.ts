import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() public cardList: CardModel.ICardList
  @Input() public searchCriterion: string
  @Output() public removeCard  = new EventEmitter<{
    list : CardModel.ICardList,
    card : CardModel.ICard
  }>();
  @Output() public createCard  = new EventEmitter<CardModel.ICardList>();
  @Output() public editCard = new EventEmitter<CardModel.ICard>();

  public onRemoveCard(card : CardModel.ICard) {
    this.removeCard.emit({list: this.cardList, card});
  }

  public onEditCard(card : CardModel.ICard) {
    this.editCard.emit(card);
  }

  public onCreateCard() {
    this.createCard.emit(this.cardList);
  }

}
