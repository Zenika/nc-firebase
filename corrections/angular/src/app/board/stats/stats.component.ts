import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "z-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"]
})
export class StatsComponent implements OnInit {
  @Input()
  account: any;

  constructor() {}

  ngOnInit() {}
}
