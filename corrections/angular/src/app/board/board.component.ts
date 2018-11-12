import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"]
})
export class BoardComponent implements OnInit {
  twitters: any[] = [];
  data: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getAccountsToSpy()
      .subscribe(data => (this.twitters = data));

    this.dataService.getData().subscribe(data => (this.data = data));
  }
}
