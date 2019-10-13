import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @Input() public searchCriterion: string;
  public listCardList: CardModel.ICardList[];

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.listCardList = this.dataService.getData();
  }

  public onRemoveCard({ list, card }) {
    this.dataService.removeCard(list, card);
  }
}
