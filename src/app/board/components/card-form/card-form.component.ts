import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})
export class CardFormComponent {
  public selectAsignee: {value: UserModel.IUser; viewValue: string}[];
  public cardId: string = `item_${(Math.random()*100).toFixed(0)}`;
  public cardName: string;
  public cardDescription: string;
  public cardAsignee: UserModel.IUser;
  public cardDate: Date | string;
  @Output() public submitChanges  = new EventEmitter<CardModel.ICard>();

  constructor(private dataService: DataService, private router: Router) {
    this.selectAsignee = this.dataService.getAsignee().reduce((prev, item) =>
      prev.concat({
        value: {...item},
        viewValue: `${item.firstName} ${item.lastName}`
      }), []);
  };

  @Input() set cardData(card: CardModel.ICard) {
    if (card) {
      this.cardId = card.id;
      this.cardName = card.name;
      this.cardDescription = card.description;
      if (card.dueDate) {
        this.cardDate = new Date(card.dueDate);
      }
      this.cardAsignee = card.assignee;
    }
  }

  public onSubmitChanges() {
    if (this.cardName && this.cardDescription) {
      const card = {
        id: this.cardId,
        name: this.cardName,
        description: this.cardDescription
      };
      if (this.cardDate) card["dueDate"] = this.cardDate;
      if (this.cardAsignee) card["assignee"] = this.cardAsignee;
      this.submitChanges.emit(card);
      this.router.navigate(['./board']);
    }
  }

  public onCancel() {
    this.router.navigate(['./board']);
  }

 }
