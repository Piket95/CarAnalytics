import { HttpClient, HttpParams } from '@angular/common/http';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      @Inject(DOCUMENT) private document: Document,
      private http: HttpClient,
      private appcomponent: AppComponent,
      private router: Router
    ) { }

  ngOnInit() {
    this.document.body.style.backgroundImage = 'url(assets/media/misc/bg_1.jpg)';
  }

  onClickSubmit(formData) {

    const body = new HttpParams()
    .set('api_key', this.appcomponent.api_key)
    .set('mail', formData.username)
    .set('password', formData.password);

    this.http.post('https://api.philippdalheimer.de/request/login', body)
    .subscribe(data => {
      console.log(data);

      if(data['success'] == true){
        this.router.navigate(['/home']);
      }
    });
  }
}
