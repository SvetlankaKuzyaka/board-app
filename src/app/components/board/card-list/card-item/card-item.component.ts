import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from '../../../../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {

  private expanded: boolean = false;
  @Input() public card: ICard;
  @Input() public isDoneSection: boolean
  @Output() public removeCard  = new EventEmitter<ICard>();

  public onRemoveCard() {
    this.removeCard.emit(this.card);
  }
  public onClickCard() {
    this.expanded = !this.expanded;
  }

}
