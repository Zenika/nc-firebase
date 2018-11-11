import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'z-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input()
  set data(value) {
        this._data = value;
        this.changeDataToDisplay(this.selectedType);
  }
  get data() {
        return this._data;
  }
  _data = [];

  graph:any;
  dataTypes = [
    'tweets',
    'following',
    'followers',
    'likes'
  ];

  selectedType = 'tweets';

  constructor() { }

  ngOnInit() {

    const graphElement = <HTMLCanvasElement>document.getElementById('canvas');
    const graph = graphElement.getContext('2d');

    this.graph = new Chart(graph, {
      type: 'line',
      data: this.generateData(),
      options: {
        responsive: true,
      }
    });

  }

  generateData() {

    const chartData = {
      labels: [],
      datasets: []
    }

    const persons = []

    this.data.forEach(item => {
      console.log(item);
      chartData.labels.push(new Date(item.timestamp.seconds * 1000).toLocaleDateString());
      Object.keys(item.twitters).forEach(username => {
        let userNotFound = true
        chartData.datasets.forEach(userData => {
          if(userData.label === username) {
            userData.data.push(item.twitters[username][this.selectedType]);
            userNotFound = false;
          }
        });
        if( userNotFound ) {
          chartData.datasets.push({
              borderColor: '#ffdd57',
              fill: false,
              label: username,
              data: [item.twitters[username][this.selectedType]]
          })
        }
      })
    })

    return chartData;
  }

  changeDataToDisplay(type) {
    if(!this.graph) return;
    this.selectedType = type;
    this.graph.data = this.generateData();
    this.graph.update();
  }

}
