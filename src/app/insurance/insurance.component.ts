import { ToastrService } from 'ngx-toastr';
import { AppComponent } from './../app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Insurance } from './insurance';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  private user_car_id: number;

  insurance: Insurance;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private appcomponent: AppComponent,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (localStorage.hasOwnProperty('currentUser') === false) {
      this.router.navigate(['/login']);
    }

    this.user_car_id = this.route.params['_value']['user_car_id'];

    // this.insurance = new Insurance(this.user_car_id);

    const body = new HttpParams()
    .set('api_key', this.appcomponent.api_key);

    this.http.post('https://api.philippdalheimer.de/request/usercar/insurance/get/' + this.user_car_id, body)
    .subscribe(data => {
      // console.log(data);

      if (data['success'] == true){

        this.insurance = new Insurance(this.user_car_id, data);

      }
    });
  }

}
