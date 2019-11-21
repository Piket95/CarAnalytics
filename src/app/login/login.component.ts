import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.document.body.style.backgroundImage = 'url(assets/media/misc/bg_1.jpg)';
  }

}
