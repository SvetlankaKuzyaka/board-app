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
    const cardEdit = {
      id: card.id,
      name: card.name,
      description: card.description
    };
    if (card.dueDate) {
      cardEdit["dueDate"] = card.dueDate
    }
    if (card.assignee) {
      cardEdit["assignee"] = card.assignee
    };
    this.dataService.editCard(cardEdit);
  }

}
