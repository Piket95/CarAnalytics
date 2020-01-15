import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private userData;

  constructor() {
    if (localStorage.hasOwnProperty('currentUser')) {
      this.userData = JSON.parse(localStorage.getItem('currentUser'));
    }
   }

  ngOnInit() {
    console.log(this.userData);
    console.log(this.userData.fav_brand);
  }

  checkEmpty(item: string) {
    if (item == null) {
      return true;
    }

    return false;
  }

}
