import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tankkostenberechnung',
  templateUrl: './tankkostenberechnung.component.html',
  styleUrls: ['./tankkostenberechnung.component.css']
})
export class TankkostenberechnungComponent implements OnInit {

  private selectedCarId: number;

  constructor() { }

  ngOnInit() {
    this.selectedCarId = getRandomInt(1, 90);
  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
