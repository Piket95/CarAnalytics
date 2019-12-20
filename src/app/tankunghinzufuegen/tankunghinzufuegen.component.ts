import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tankunghinzufuegen',
  templateUrl: './tankunghinzufuegen.component.html',
  styleUrls: ['./tankunghinzufuegen.component.css']
})
export class TankunghinzufuegenComponent implements OnInit {

  private user_car_id: number;
  private user_id: number;
  private model_name: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    if (localStorage.hasOwnProperty('currentUser') === false) {
      this.router.navigate(['/login']);
    }

    this.user_car_id = this.route.params['_value']['user_car_id'];
    this.user_id = JSON.parse(localStorage.getItem('currentUser'))['id'];
    this.model_name = this.get_modelname(this.user_car_id);
  }

  get_modelname(user_car_id: number) {
    return 'Test Tesla (' + user_car_id + ')';
  }

}
