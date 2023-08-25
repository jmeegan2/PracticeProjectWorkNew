import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllPatientsComponent } from './components/all-patients/all-patients.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'patients',
    component: AllPatientsComponent
  },
  {
    path: 'providers',
    component: ProvidersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}

