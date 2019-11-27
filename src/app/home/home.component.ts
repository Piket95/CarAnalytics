import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
    private appcomponent: AppComponent,
    private router: Router
  ) { }

  ngOnInit() {
    this.document.body.style.backgroundImage = '';

    if (!localStorage.hasOwnProperty('currentUser')) {
      this.router.navigate(['/login']);
    }

    console.log('Home: ' + JSON.parse(localStorage.getItem('currentUser'))['mail']);

    const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key);

    this.http.post('https://api.philippdalheimer.de/request/usercar/get/' + JSON.parse(localStorage.getItem('currentUser'))['id'], body)
      .subscribe(data => {
        console.log(data);

        if(data['success'] == true) {
          this.cars = data['cars'];
        }
      });
  }

}
