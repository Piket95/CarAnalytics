import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'; // wird für Navigation gebraucht
import { ToastrModule } from 'ngx-toastr'; // für Notifications
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // für Notifications
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { KfzAnlegenComponent } from './kfz-anlegen/kfz-anlegen.component';
import { FabComponent } from './components/fab/fab.component';
import { MaincardComponent } from './components/maincard/maincard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    RegisterComponent,
    CarCardComponent,
    KfzAnlegenComponent,
    FabComponent,
    MaincardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},

      {path: 'home', component: HomeComponent},
      {path: 'prognose/costs', component: HomeComponent},
      {path: 'analysis/buy', component: HomeComponent},
      {path: 'analysis/fuel', component: HomeComponent},
      {path: 'tuev', component: HomeComponent},
      {path: 'mileage', component: HomeComponent},
      {path: 'profile', component: HomeComponent},
      {path: 'settings', component: HomeComponent},
      {path: 'create/car', component: KfzAnlegenComponent},
      {path: 'maintenance', component: HomeComponent}
      ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
