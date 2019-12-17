import { ListItem } from './../components/list-item/list-item';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  user_car_id: number;

  //Lediglich ein Beispiel fest reinprogrammiert. Wird ersetzt durch die Daten der API
  private listItem: ListItem = {
    title: 'placeholder',
    date: '2018-08-02',
    price: 55.22
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    if (localStorage.hasOwnProperty('currentUser') === false) {
      this.router.navigate(['/login']);
    }

    this.user_car_id = this.route.params['_value']['user_car_id'];
  }

  goToDetails(entry: string) {

  }

}
