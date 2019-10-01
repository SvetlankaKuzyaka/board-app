import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  private expanded: boolean = false;
  @Input() public card: CardModel.ICard;
  @Input() public isDoneSection: boolean
  @Output() public removeCard  = new EventEmitter<CardModel.ICard>();

  public onRemoveCard() {
    this.removeCard.emit(this.card);
  }
  public onClickCard() {
    this.expanded = !this.expanded;
  }

}
