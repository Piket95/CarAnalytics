import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router'; // wird für Navigation gebraucht
import { ToastrModule } from 'ngx-toastr'; // für Notifications
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // für Notifications
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Bootstrap modules: https://ng-bootstrap.github.io/

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { KfzAnlegenComponent } from './kfz-anlegen/kfz-anlegen.component';
import { FabComponent } from './components/fab/fab.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { TankkostenberechnungComponent } from './tankkostenberechnung/tankkostenberechnung.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MaintenanceDetailsComponent } from './maintenance-details/maintenance-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CostPrognoseComponent } from './cost-prognose/cost-prognose.component';
import { InsuranceComponent } from './insurance/insurance.component';

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
    MaincardComponent,
    TankkostenberechnungComponent,
    MaintenanceComponent,
    ListItemComponent,
    MaintenanceDetailsComponent,
    UserProfileComponent,
    CostPrognoseComponent,
    InsuranceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      { path: 'home', component: HomeComponent },
      { path: 'prognose/costs', component: HomeComponent },
      { path: 'analysis/buy', component: HomeComponent },
      { path: 'analysis/fuel', component: TankkostenberechnungComponent },
      { path: 'tuev', component: HomeComponent },
      { path: 'mileage', component: HomeComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'settings', component: HomeComponent },
      { path: 'create/car', component: KfzAnlegenComponent },
      { path: 'maintenance', redirectTo: '/home', pathMatch: 'full' },
      { path: 'maintenance/:user_car_id', component: MaintenanceComponent },
      { path: 'maintenance_details', component: MaintenanceDetailsComponent },
      { path: 'insurance/:user_car_id', component: InsuranceComponent },
      { path: 'maintenance_details', component: MaintenanceDetailsComponent }
    ]),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
