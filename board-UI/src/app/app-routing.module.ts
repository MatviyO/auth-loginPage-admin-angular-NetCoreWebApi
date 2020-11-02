import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
