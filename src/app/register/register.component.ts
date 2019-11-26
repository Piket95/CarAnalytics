import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as EmailValidator from 'email-validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
    private appcomponent: AppComponent,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.document.body.style.backgroundImage = 'url(assets/media/misc/bg_1.jpg)';
  }

  onClickSubmit(formData) {

    if (
         formData.firstname == ''
      || formData.lastname == ''
      || formData.mail == ''
      || formData.birthday == ''
      || formData.password == ''
      || formData.password_two == ''
    ) {
      this.toastr.warning('Es müssen alle Felder ausgefüllt werden.');
    }

    if ( formData.password !== formData.password_two ) {
      this.toastr.warning('Die Passwörter stimmen nicht überein.');
    }

    // check email
    if ( !EmailValidator.validate(formData.mail) ) {
      this.toastr.warning('Bitte überprüfen Sie die E-Mail.');
    }

    const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key)
      .set('firstname', formData.firstname)
      .set('lastname', formData.lastname)
      .set('mail', formData.mail)
      .set('birthday', formData.birthday)
      .set('password', formData.password);

    this.http.post('https://api.philippdalheimer.de/request/user/create', body)
      .subscribe(data => {
        console.log(data);

        if(data['success'] == true){
          this.toastr.success('Account wurde erfolgreich erstellt.');
          // TODO 26.11.2019 Philipp: Weiterleitung zu Profil (direkt eingeloggt)
          console.dir(data);
          // this.router.navigate(['/home']);
        }else{
          this.toastr.warning(data['message']);
        }
      });
  }

}
