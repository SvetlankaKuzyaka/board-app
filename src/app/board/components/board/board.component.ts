import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @Input() public searchCriterion: string;
  public listCardList: Observable<CardModel.ICardList[]>;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.listCardList = this.dataService.getData();
  }

  public onRemoveCard({ list, card }) {
    this.dataService.removeCard(list, card);
  }

  public onEditCard(card: CardModel.ICard) {
    this.router.navigate(['./edit', card.id], { relativeTo: this.route });
  }

  public onCreateCard(list: CardModel.ICardList) {
    this.router.navigate(['./create', list.id], { relativeTo: this.route });
  }
}
