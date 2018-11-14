import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  twitters: any[] = [];
  data: any[] = [];
  twitterHandle = "";
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getAccountsToSpy()
      .subscribe(data => (this.twitters = data));

    this.dataService.getData().subscribe(data => (this.data = data));
  }

  deleteTwitter(twitterUser) {
    this.dataService.removeTwitter(twitterUser.id);
  }

  addTwitterHandle(event) {
    if (event.keyCode === 13) {
      this.dataService.addTwitter(this.twitterHandle);
      this.twitterHandle = "";
      return;
    }
  }
}