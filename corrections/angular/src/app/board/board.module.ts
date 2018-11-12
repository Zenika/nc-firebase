import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BoardComponent } from "./board.component";
import { GraphComponent } from "./graph/graph.component";
import { StatsComponent } from "./stats/stats.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BoardComponent, StatsComponent, GraphComponent]
})
export class BoardModule {}
