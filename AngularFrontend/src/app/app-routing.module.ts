import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllPatientsComponent } from './components/all-patients/all-patients.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'userAuth', pathMatch: 'full' },
  {
    path: 'patients',
    component: AllPatientsComponent,
    canActivate: [AuthGuard] // Apply AuthGuard to protect this route
  },
  {
    path: 'providers',
    component: ProvidersComponent,
    canActivate: [AuthGuard] // Apply AuthGuard to protect this route
  },
  {
    path: 'userAuth',
    component: UserAuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard] // Apply AuthGuard to protect this route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
