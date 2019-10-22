import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})
export class CardFormComponent {
  public cardId: string = `item_${(Math.random()*100).toFixed(0)}`;
  public cardName: string;
  public cardDescription: string;
  public cardAsignee: UserModel.IUser;
  public cardDate: Date | string;
  @Output() public submitChanges  = new EventEmitter<CardModel.ICard>();

  constructor(private router: Router, private route: ActivatedRoute) {};

  @Input() set cardData(card: CardModel.ICard) {
    if (card) {
      this.cardId = card.id;
      this.cardName = card.name;
      this.cardDescription = card.description;
      if (card.dueDate) this.cardDate = new Date(card.dueDate);
      this.cardAsignee = card.assignee;
      if (this.cardAsignee) {
        this.asignees.push({
          value: this.cardAsignee,
          viewValue: `${this.cardAsignee.firstName} ${this.cardAsignee.lastName}`
        });
      }
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

  asignees: {value: UserModel.IUser; viewValue: string}[] = [
    {
      value: {
        id: "user_5",
        firstName: "Sergey",
        lastName: "Ptichkin"
      },
      viewValue: "Sergey Ptichkin"
    },
    {
      value: {
        id: "user_7",
        firstName: "Maxim",
        lastName: "Levitan"
      },
      viewValue: "Maxim Levitan"
    }
  ];
}
