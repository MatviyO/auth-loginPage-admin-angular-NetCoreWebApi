import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import {JavascriptComponent} from '../javascript/javascript.component';
import {AngularComponent} from '../angular/angular.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, children: [
      { path: 'javascript', component: JavascriptComponent},
      { path: 'angular', component: AngularComponent},
    ] },
  {path: '', redirectTo: 'javascript', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
