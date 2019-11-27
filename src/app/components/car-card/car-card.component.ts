import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() carDetails;

  constructor() { }

  ngOnInit() {
    console.dir(this.carDetails.standard_picture);
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
        background: 'url(' + this.carDetails.standard_picture + ') no-repeat center center'
      };
      return styles;
    } else {
      const styles = {
        background: 'url(' + this.carDetails.car_profile_picture + ') no-repeat center center'
      };
      return styles;
    }


  }

}