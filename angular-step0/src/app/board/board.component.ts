import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Account } from "../models/account.model";
import { Stat } from "../models/stat.model";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  twitters: Account[] = [];
  data: Stat[] = [];
  twitterAccount = "";
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAccountsToSpy().subscribe(data => {
      this.twitters = data;
    });

    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  deleteTwitter(twitterUser) {
    this.dataService.removeTwitter(twitterUser.id);
  }

  addTwitterAccount(event) {
    if (event.keyCode === 13) {
      this.dataService.addTwitter(this.twitterAccount);
      this.twitterAccount = "";
      return;
    }
  }
}
