import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService,
  SiderbarService,
  SharedService
} from './service.index'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    SettingsService,
    SiderbarService,
    SharedService
  ]
})
export class ServiceModule { }
