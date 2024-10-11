import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    Page1RoutingModule,
    NzSelectModule,
    FormsModule,
    NzDatePickerModule
  ]
})
export class Page1Module { }
