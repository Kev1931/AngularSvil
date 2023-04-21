import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientViewRoutingModule } from './client-view-routing.module';
import { ClientViewComponent } from './client-view.component';
import { ClientListModule } from '../client-list/client-list.module';


@NgModule({
  declarations: [
    ClientViewComponent
  ],
  imports: [
    CommonModule,
    ClientViewRoutingModule,
    ClientListModule
  ]
})
export class ClientViewModule { }
