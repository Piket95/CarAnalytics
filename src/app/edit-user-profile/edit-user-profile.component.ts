import { AppComponent } from './../app.component';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  public userData;

  firstname: string;
  lastname: string;
  favBrand: string;
  favCar: string;
  passwordNew: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private appcomponent: AppComponent,
    private http: HttpClient
  ) {  }

  ngOnInit() {
    if (localStorage.hasOwnProperty('currentUser')) {
      this.userData = JSON.parse(localStorage.getItem('currentUser'));
    }

    this.firstname = (this.userData.firstname === null) ? '' : this.userData.firstname;
    this.lastname = (this.userData.lastname === null) ? '' : this.userData.lastname;
    this.favBrand = (this.userData.fav_brand === null) ? '' : this.userData.fav_brand;
    this.favCar = (this.userData.fav_car === null) ? '' : this.userData.fav_car;
  }

  onClickSubmit(formData) {

    if (formData.password !== '') {

      if (formData.firstname !== '') {
        this.firstname = formData.firstname;
      } else {
        this.toastr.error('Bitte geben Sie einen Vornamen an!', 'Fehlende Angabe');
        return;
      }

      if (formData.lastname !== '') {
        this.lastname = formData.lastname;
      } else {
        this.toastr.error('Bitte geben Sie einen Nachnamen an!', 'Fehlende Angabe');
        return;
      }

      if (formData.favBrand !== '') {
        this.favBrand = formData.favBrand;
      } else {
        this.favBrand = '';
      }

      if (formData.favCar !== '') {
        this.favCar = formData.favCar;
      } else {
        this.favCar = '';
      }

      //Passwort ändern (Überprüfen ob beide gleich sind!!)
      if (formData.newPW1 !== '' && formData.newPW2 !== '') {
        if (formData.newPW1 === formData.newPW2) {
          this.passwordNew = formData.newPW2;
        } else {
          this.toastr.error(
            'Beide Passwörter müssen identisch sein!',
            'Passwörter stimmen nicht überein'
          );
          return;
        }
      } else if ((formData.newPW1 !== '' && formData.newPW2 === '') || (formData.newPW1 === '' && formData.newPW2 !== '')) {
        this.toastr.error(
          'Bitte füllen Sie beide Passwortfelder aus, wenn Sie Ihr Passwort ändern möchten!',
          'Bitte alle Passwortfelder ausfüllen'
        );
      } else {
        this.passwordNew = '';
      }

      const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key)
      .set('password', formData.password)
      .set('firstname', this.firstname)
      .set('lastname', this.lastname)
      .set('fav_brand', this.favBrand)
      .set('fav_car', this.favCar)
      .set('password_new', this.passwordNew);

      // console.log(body.getAll('fav_brand'));
      // console.log(body.getAll('fav_car'));

      this.http.post('https://api.philippdalheimer.de/request/user/edit/' + this.userData.id, body)
      .subscribe(data => {
        // console.log(data);

        if (data['success'] == true) {
          localStorage.setItem('currentUser', JSON.stringify(data['user']));
          this.toastr.success('Profil wurde erfolgreich aktualisiert!');
          this.router.navigate(['/profile']);
        }
        else {
          this.toastr.error(data['message']);
        }
      });

    } else {
      this.toastr.error('Bitte geben Sie Ihr aktuelles Passwort an, um die Profilaktualisierung abzuschließen!', 'Passwort fehlt');
    }
  }

}
