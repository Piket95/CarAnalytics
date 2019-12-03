import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.css']
})
export class MaincardComponent implements OnInit {

  @Input()
  footer: string;
  @Input()
  footerButtonLeftText: string;
  @Input()
  footerButtonRightText: string;
  @Input()
  footerButtonRightLink: string;

  constructor() { }

  ngOnInit() {
  }

}
