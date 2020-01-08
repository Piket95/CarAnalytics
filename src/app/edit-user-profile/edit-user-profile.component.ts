import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {

  public userData;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    if (localStorage.hasOwnProperty('currentUser')) {
      this.userData = JSON.parse(localStorage.getItem('currentUser'));
    }

    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onClickSubmit() {
    //Beispiel in KFZ-Anlegen

    //TODO: Daten an API wegschicken mit Password
    //TODO: Passwortübereinstimmung überprüfen, falls gesetzt!

    this.toastr.success('Profil wurde erfolgreich aktualisiert!');
    this.router.navigate(['/profile']);
  }

}
