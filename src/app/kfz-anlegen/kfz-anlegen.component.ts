import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppComponent} from '../app.component';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-kfz-anlegen',
  templateUrl: './kfz-anlegen.component.html',
  styleUrls: ['./kfz-anlegen.component.css']
})
export class KfzAnlegenComponent implements OnInit {

  public manufacturers;
  public fuels;
  form: FormGroup;
  loading = false;
  customImage: File = null;

  constructor(
    private http: HttpClient,
    private appcomponent: AppComponent,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      custom_image: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.customImage = event.target.files[0];
    }
  }

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

    console.dir(this.customImage);

    const fd = new FormData();
    if (this.customImage !== null) {
      fd.append('customImage', this.customImage, this.customImage.name);
    } else {
      fd.append('customImage', '');
    }
    fd.append('api_key', this.appcomponent.api_key);
    fd.append('manufacturerId', manufacturerId.value);
    fd.append('modelName', modelName.value);
    fd.append('mileage', mileage.value);
    fd.append('price', price.value);
    fd.append('ps', ps.value);
    fd.append('constructionYear', constructionYear.value);
    fd.append('fuelId', fuelId.value);
    fd.append('user_id', JSON.parse(localStorage.getItem('currentUser'))['id']);

    this.http.post('https://api.philippdalheimer.de/request/car/create', fd)
      .subscribe(data => {

        if(data['success'] == true){
          this.toastr.success('KFZ wurde erfolgreich erstellt.');
          this.router.navigate(['/home']);
        } else {
          this.toastr.warning(data['message']);
        }
      });

  }
}
