import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kilometerzaehler',
  templateUrl: './kilometerzaehler.component.html',
  styleUrls: ['./kilometerzaehler.component.css']
})
export class KilometerzaehlerComponent implements OnInit {

  private editStatus: boolean;
  private btnIcon: string;

  // TODO 20.12.2019: Wenn Speichern gedrückt wurde, im hintergrund per API speichern + Nachricht ausgeben, wenns gespeichert wurde

  constructor() { }

  ngOnInit() {
    this.editStatus = false;
    if (!this.editStatus) {
      this.btnIcon = 'fa-edit';
    }
  }

  // TODO 20.12.2019: Auch noch CarID übergeben?!
  checkSave(editStatus: boolean) {
    // button "Speichern" wurde gedrückt
    if (!editStatus) {
      console.dir('Funktion zum Speichern implementieren per API');
    }
  }

}
