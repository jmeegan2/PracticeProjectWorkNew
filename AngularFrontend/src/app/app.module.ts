import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AllPatientsComponent } from './components/all-patients/all-patients.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { RouterModule } from '@angular/router';
import { ProvidersComponent } from './components/providers/providers.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    AllPatientsComponent,
    ProvidersComponent,
    UserAuthComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
