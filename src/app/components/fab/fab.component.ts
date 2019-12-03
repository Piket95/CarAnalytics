import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {

  @Input()
  icon: string;
  @Input()
  tooltipTitle: string;
  @Input()
  link: string;

  constructor() { }

  ngOnInit() { }

}

// NUTZUNG: <app-fab icon="la la-plus" tooltipTitle="Neues KFZ hinzufügen" link="#"></app-fab>

