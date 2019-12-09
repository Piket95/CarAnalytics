import { DetailItem } from './maintenance-details-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.css']
})
export class MaintenanceDetailsComponent implements OnInit {

  title: string = 'Motorschaden';
  sum: number = 0;

  items: DetailItem[] = [
    {
      title: 'Gutachten',
      price: 55.40
    },
    {
      title: 'Neuer Motor',
      price: 5000
    },
    {
      title: 'Einbau',
      price: 50.15
    }
  ];

  constructor() { }

  ngOnInit() {
    this.items.forEach(item => {
      this.sum = this.sum + +item.price; //Das extra "+" vor "item.price" wandelt die Variable in number, falls sie es nicht schon ist
    });

    this.sum = Number(this.sum.toFixed(2));
  }

}
