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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (localStorage.hasOwnProperty('currentUser') === false) {
      this.router.navigate(['/login']);
    }

    this.user_car_id = this.route.params['_value']['user_car_id'];

    this.insurance = new Insurance(this.user_car_id);
  }

}
