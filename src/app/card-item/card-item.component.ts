import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from '../models/Card';
import { IUser } from '../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements ICard {

  @Input() public id: string
  @Input() public name: string
  @Input() public description: string
  @Input() public dueDate?: Date | string
  @Input() public assignee?: IUser
  @Output() public removeCard  = new EventEmitter<ICard>();

  public onRemoveCard() {
    this.removeCard.emit(this);
  }

}
