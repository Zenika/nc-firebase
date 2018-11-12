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
  twitterHandler = "";
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getAccountsToSpy()
      .pipe(
        map(handlers => {
          console.log(handlers);
          return handlers.map(handler => {
            return {
              ...handler.payload.doc.data(),
              id: handler.payload.doc.id
            };
          });
        })
      )
      .subscribe(data => (this.twitters = data));

    this.dataService.getData().subscribe(data => (this.data = data));
  }

  deleteTwitter(twitterUser) {
    this.dataService.removeTwitter(twitterUser.id);
  }

  addTwitterHandler(event) {
    if (event.keyCode === 13) {
      this.dataService.addTwitter(this.twitterHandler);
      this.twitterHandler = "";
      return;
    }
  }
}
