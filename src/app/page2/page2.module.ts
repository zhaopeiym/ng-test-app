import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    CommonModule,
    Page2RoutingModule,
    NzSelectModule,
    FormsModule
  ]
})
export class Page2Module { }
