import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICardList, ICard } from '../models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements ICardList {

  @Input() public id: string
  @Input() public name: string
  @Input() public cards: ICard[]
  @Output() public removeCard  = new EventEmitter<ICard>();

  public onRemoveCard(card : ICard) {
    this.removeCard.emit(card);
  }

}
