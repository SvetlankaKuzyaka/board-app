import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-page",
  templateUrl: "./edit-page.component.html",
  styleUrls: ["./edit-page.component.scss"]
})
export class EditPageComponent implements OnInit {
  public card: CardModel.ICard;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.card = this.dataService.getDataById(this.route.snapshot.params.id);
  }

  public onEditCard(card: CardModel.ICard) {
    this.card.id = card.id;
    this.card.name = card.name;
    this.card.description = card.description;
    if (card.dueDate) {
      this.card.dueDate = card.dueDate
    } else if (this.card.dueDate) {
      delete this.card.dueDate;
    };
    if (card.assignee) {
      this.card.assignee = card.assignee
    } else if (this.card.assignee) {
      delete this.card.assignee;
    };
  }

}
