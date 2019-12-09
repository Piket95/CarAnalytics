import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private userdata;
  @Input()
  active = '';

  constructor( private router: Router ) {
    if (localStorage.hasOwnProperty('currentUser')) {
      this.userdata = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  private userName = '';
  private userImage = '';


  ngOnInit() {
    this.userName = this.userdata.firstname + ' ' + this.userdata.lastname;
    if (this.userdata.profile_picture !== '') {
      this.userImage = this.userdata.profile_picture;
    } else {
      this.userImage = 'assets/media/users/default.jpg';
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
