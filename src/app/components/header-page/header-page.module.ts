import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderPageRoutingModule } from './header-page-routing.module';
import { HeaderPageComponent } from './header-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderPageComponent
  ],
  imports: [
    CommonModule,
    HeaderPageRoutingModule,
    RouterModule
  ],
  exports:
  [
  HeaderPageComponent
  ]
})
export class HeaderPageModule { }
