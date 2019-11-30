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
    // tslint:disable-next-line:max-line-length
    this.document.getElementById('car_loader').innerHTML = '<div style="margin-top: 100px" class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div></div>';

    if (!localStorage.hasOwnProperty('currentUser')) {
      this.router.navigate(['/login']);
    }

    const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key);

    this.http.post('https://api.philippdalheimer.de/request/usercar/get/' + JSON.parse(localStorage.getItem('currentUser'))['id'], body)
      .subscribe(data => {
        if (data['success'] == true) {
          this.document.getElementById('car_loader').innerHTML = '';
          this.cars = data['cars'];
        }
      });
  }

}
