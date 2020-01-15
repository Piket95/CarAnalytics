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

    //TODO: Passwortübereinstimmung überprüfen, falls gesetzt!

    if (formData.password !== '') {

      const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key)
      .set('password', formData.password);

      if (formData.firstname !== '') {
        body.append('firstname', formData.firstname);
      }

      if (formData.lastname !== '') {
        body.append('lastname', formData.lastname);
      }

      if (formData.favBrand !== '') {
        body.append('fav_brand', formData.favBrand);
      }

      if (formData.favCar !== '') {
        body.append('fav_car', formData.favCar);
      }

      //Passwort ändern (Überprüfen ob beide gleich sind!!)
      if (formData.newPW1 !== '' && formData.newPW2 !== '') {
        if (formData.newPW1 === formData.newPW2) {
          //TODO: bleibt das auf "password_old" stehen oder wird das in new geändert?
          body.append('password_old', formData.newPW2);
        }
      } else if ((formData.newPW1 !== '' && formData.newPW2 === '') || (formData.newPW1 === '' && formData.newPW2 !== '')) {
        this.toastr.error(
          'Bitte füllen Sie beide Passwortfelder aus, wenn Sie Ihr Passwort ändern möchten!',
          'Bitte alle Passwortfelder ausfüllen'
        );
      }


      //TODO: Daten an API wegschicken mit Password

      this.http.post('https://api.philippdalheimer.de/request/user/get/' + this.userData.id, body)
      .subscribe(data => {
        console.log(data);

        if (data['success'] == true) {
          localStorage.setItem('currentUser', JSON.stringify(data['user']));
          this.toastr.success('Profil wurde erfolgreich aktualisiert!');
          this.router.navigate(['/profile']);
        }
      });

    } else {
      this.toastr.error('Bitte geben Sie Ihr aktuelles Passwort an, um die Profilaktualisierung abzuschließen!', 'Passwort fehlt');
    }
  }

}
