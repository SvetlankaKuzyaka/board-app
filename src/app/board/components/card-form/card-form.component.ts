import { Component } from "@angular/core";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})
export class CardFormComponent {
  public cardName: string;
  public cardDescription: string;
  public cardAsignee: string;

  public asignees: any[] = [
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
