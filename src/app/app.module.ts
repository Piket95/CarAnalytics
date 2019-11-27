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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    RegisterComponent,
    CarCardComponent,
    KfzAnlegenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', component: LoginComponent}
      ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
