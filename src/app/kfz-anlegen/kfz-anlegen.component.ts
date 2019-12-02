import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppComponent} from '../app.component';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-kfz-anlegen',
  templateUrl: './kfz-anlegen.component.html',
  styleUrls: ['./kfz-anlegen.component.css']
})
export class KfzAnlegenComponent implements OnInit {

  public manufacturers;
  public fuels;

  constructor(
    private http: HttpClient,
    private appcomponent: AppComponent,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key);

    this.http.post('https://api.philippdalheimer.de/request/manufacturer/get', body)
      .subscribe(data => {
        if (data['success'] == true) {
          this.manufacturers = data['manufacturer'];
        }
      });

    this.http.post('https://api.philippdalheimer.de/request/fuel/get/', body)
      .subscribe(data => {
        if (data['success'] == true) {
          this.fuels = data['fuel'];
        }
      });
  }

  onClickSubmit() {
    const manufacturerId: HTMLInputElement = document.getElementById('manufacturer_id') as HTMLInputElement;
    const modelName: HTMLInputElement = document.getElementById('car_name') as HTMLInputElement;
    const mileage: HTMLInputElement = document.getElementById('mileage') as HTMLInputElement;
    const price: HTMLInputElement = document.getElementById('price') as HTMLInputElement;
    const ps: HTMLInputElement = document.getElementById('ps') as HTMLInputElement;
    const constructionYear: HTMLInputElement = document.getElementById('construction_year') as HTMLInputElement;
    const fuelId: HTMLInputElement = document.getElementById('fuel_id') as HTMLInputElement;
    const customImage: HTMLInputElement = document.getElementById('custom_image') as HTMLInputElement;

    // check values
    if (manufacturerId.value === undefined || manufacturerId.value === null || manufacturerId.value === '') {
      this.toastr.warning('Es muss ein Hersteller ausgewählt werden');
      return;
    }
    if (modelName.value === undefined || modelName.value === null || modelName.value === '') {
      this.toastr.warning('Es muss ein Modellname angegeben werden');
      return;
    }
    if (mileage.value === undefined || mileage.value === null || mileage.value === '') {
      this.toastr.warning('Es muss eine Zahl für den Kilometerstand angegeben werden');
      return;
    }
    if (price.value === undefined || price.value === null || price.value === '') {
      this.toastr.warning('Es muss ein Preis angegeben werden');
      return;
    }
    if (ps.value === undefined || ps.value === null || ps.value === '') {
      this.toastr.warning('Es muss eine PS-Anzahl angegeben werden');
      return;
    }
    if (constructionYear.value === undefined || constructionYear.value === null || constructionYear.value === '') {
      this.toastr.warning('Es muss ein Baujahr angegeben werden');
      return;
    }
    if (fuelId.value === undefined || fuelId.value === null || fuelId.value === '') {
      this.toastr.warning('Es muss ein Treibstoff ausgewählt werden');
      return;
    }

    const body = new HttpParams()
      .set('api_key', this.appcomponent.api_key)
      .set('manufacturerId', manufacturerId.value)
      .set('modelName', modelName.value)
      .set('mileage', mileage.value)
      .set('price', price.value)
      .set('ps', ps.value)
      .set('constructionYear', constructionYear.value)
      .set('fuelId', fuelId.value)
      .set('customImage', customImage.value)
      .set('user_id', JSON.parse(localStorage.getItem('currentUser'))['id']);

    // TODO 02.12.2019 Philipp: CUSTOM Bild auswählen, hochladen und einfügen!

    this.http.post('https://api.philippdalheimer.de/request/car/create', body)
      .subscribe(data => {
        console.log(data);

        if(data['success'] == true){
          this.toastr.success('KFZ wurde erfolgreich erstellt.');
          this.router.navigate(['/home']);
        } else {
          this.toastr.warning(data['message']);
        }
      });

  }

}
