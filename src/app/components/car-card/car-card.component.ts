import { Component, Inject, Input, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppComponent} from '../../app.component';
import {DOCUMENT} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
declare var jQuery: any;

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() carDetails;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
    private appcomponent: AppComponent,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    (function ($) {
      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
    })(jQuery);

  }

  getKilometerstand(position) {
    const zahl = this.carDetails.mileage.split('').reverse().join('')[position];
    if (zahl == null) {
      return 0;
    }
    return zahl;
  }

  getBackgroundImage() {

    if (this.carDetails.car_profile_picture == null) {
      const styles = {
        background: 'url(' + this.carDetails.standard_picture + ') no-repeat center center',
        backgroundSize: '190px'
      };
      return styles;
    } else {
      const styles = {
        background: 'url(' + this.carDetails.car_profile_picture + ') no-repeat center center',
        backgroundSize: 'cover'
      };
      return styles;
    }
  }

  deleteCarForUser(carId) {
    const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key)
      .set('user_id', JSON.parse(localStorage.getItem('currentUser'))['id']);

    this.http.post('https://api.philippdalheimer.de/request/usercar/delete/' + carId, body)
      .subscribe(data => {
        if (data['success'] == true) {
          this.toastr.success('Das KFZ wurde erfolgreich gelöscht.');
          window.location.reload();
        }else{
          this.toastr.warning(data['message']);
        }
      });

  }

}
