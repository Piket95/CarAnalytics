import { ToastrService } from 'ngx-toastr';
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
      private router: Router,
      private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.document.body.style.backgroundImage = 'url(assets/media/misc/bg_1.jpg)';
    this.document.body.style.backgroundAttachment = 'fixed';

    if (localStorage.hasOwnProperty('currentUser')) {
      this.router.navigate(['/home']);
    }

  }

  onClickSubmit(formData) {

    const body = new HttpParams()
    .set('api_key', this.appcomponent.api_key)
    .set('mail', formData.username)
    .set('password', formData.password);

    this.http.post('https://api.philippdalheimer.de/request/login', body)
    .subscribe(data => {
      console.log(data);

      if (data['success'] == true) {

        localStorage.setItem('currentUser', JSON.stringify(data['user']));
        // console.log(JSON.parse(localStorage.getItem('currentUser')));
        this.router.navigate(['/home']);

      } else if (formData.username == '' || formData.password == '') {

        this.toastr.warning('Bitte füllen Sie beide Felder aus, um sich anzumelden!', 'Fehlende Eingaben');

      } else {

        this.toastr.error(data['message'], 'Login fehlgeschlagen');

      }
    });
  }
}
