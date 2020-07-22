import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'signup-admin', pathMatch: 'full', component: SignupComponent },
  { path: 'signup', pathMatch: 'full', component: SignupComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
