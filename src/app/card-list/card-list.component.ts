import { Component, OnInit } from '@angular/core';
import { ICardList, ICard } from '../models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit, ICardList {

  id: string
  name: string
  cards: ICard[ ]

  ngOnInit() {
  }

}
