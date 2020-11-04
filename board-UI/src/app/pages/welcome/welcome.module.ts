import {NgModule} from '@angular/core';

import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './welcome.component';
import {JavascriptComponent} from '../javascript/javascript.component';
import {AngularComponent} from '../angular/angular.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {IconsProviderModule} from '../../icons-provider.module';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    NzLayoutModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
   ],
  declarations: [
    WelcomeComponent,
    JavascriptComponent,
    AngularComponent],
  exports: [
    WelcomeComponent,
    JavascriptComponent,
    AngularComponent]
})
export class WelcomeModule {
}
