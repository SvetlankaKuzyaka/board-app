import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})
export class CardFormComponent {
  public cardName: string;
  public cardDescription: string;
  public cardAsignee: UserModel.IUser;
  public cardDate: Date;

  constructor(private router: Router, private route: ActivatedRoute) {};

  @Input() set cardData(card: CardModel.ICard) {
    if (card) {
      this.cardName = card.name;
      this.cardDescription = card.description;
      this.cardAsignee = card.assignee;
      this.cardDate = new Date(card.dueDate);
      if (this.cardAsignee) {
        this.asignees.push({
          value: this.cardAsignee,
          viewValue: `${this.cardAsignee.firstName} ${this.cardAsignee.lastName}`
        });
      }
    }
  }

  public onSubmit() {
    console.log(this.cardName);
    console.log(this.cardDescription);
    console.log(this.cardAsignee);
    console.log(this.cardDate);
  }

  public onCancel() {
    this.router.navigate(['/board']);
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
