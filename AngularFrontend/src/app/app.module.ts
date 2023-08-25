import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AllPatientsComponent } from './components/all-patients/all-patients.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { ProvidersComponent } from './components/providers/providers.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPatientsComponent,
    ProvidersComponent,
    UserAuthComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
