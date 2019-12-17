import { CostPrognoseItem } from './cost-prognose-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-prognose',
  templateUrl: './cost-prognose.component.html',
  styleUrls: ['./cost-prognose.component.css']
})
export class CostPrognoseComponent implements OnInit {

  sum: number = 0;

  private monate: string[] = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ];
  nextMonth: string;

  beispiel: CostPrognoseItem[] = [
    {
      bezeichnung: 'Testbezeichnung',
      anzahl: 42,
      kosten: 42.42
    },
    {
      bezeichnung: 'Benzinkosten',
      anzahl: 24,
      kosten: 72.66
    }
  ];

  constructor() { }

  ngOnInit() {

    let date = new Date();

    if (date.getMonth() === 11) {
      date = new Date(date.getFullYear() + 1, 0, 1);
    } else {
      date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }

    this.nextMonth = this.monate[date.getMonth()] + ' ' + date.getFullYear();

    this.beispiel.forEach(item => {
      this.sum = this.sum + +item.kosten;
    });

    this.sum = Number(this.sum.toFixed(2));
  }

  clickPrint(){
    //Do something to print
  }

}
