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
    console.log(this.card);
  }

}
