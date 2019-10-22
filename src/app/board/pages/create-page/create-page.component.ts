import { Component } from '@angular/core';
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent {
  public list: CardModel.ICardList;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.list = this.dataService.getListById(this.route.snapshot.params.id);
  }

  public onCreateCard(card: CardModel.ICard) {
    this.dataService.addCard(this.list, card);
  }
}
