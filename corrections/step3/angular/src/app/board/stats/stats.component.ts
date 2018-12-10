import { Component, OnInit, Input } from "@angular/core";
import { Twitter } from "src/app/models/twitter.model";

@Component({
  selector: "z-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"]
})
export class StatsComponent implements OnInit {

  @Input()
  account: Twitter;

  constructor() { }

  ngOnInit() { }
}
