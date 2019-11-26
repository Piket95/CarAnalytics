import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarAnalytics';
  // tslint:disable-next-line: variable-name
  api_key = '3290ec3c19a8a39362f7d70043f15627';
}
