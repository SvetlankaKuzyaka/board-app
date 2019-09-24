import { Component, OnInit } from '@angular/core';
import { ICard } from '../models/Card';
import { IUser } from '../models/User';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit, ICard {

  id: string
  name: string
  description: string
  dueDate?: Date | string
  assignee?: IUser

  ngOnInit() {
  }

}
