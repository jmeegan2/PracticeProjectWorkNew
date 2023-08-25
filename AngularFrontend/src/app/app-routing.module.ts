import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { ProvidersComponent } from './providers/providers.component';

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

