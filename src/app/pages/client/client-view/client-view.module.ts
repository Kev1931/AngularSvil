import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientViewRoutingModule } from './client-view-routing.module';
import { ClientViewComponent } from './client-view.component';
import { ClientListModule } from '../client-list/client-list.module';
import { HeaderPageModule } from 'src/app/components/header-page/header-page.module';


@NgModule({
  declarations: [
    ClientViewComponent
  ],
  imports: [
    CommonModule,
    ClientViewRoutingModule,
    ClientListModule,
    HeaderPageModule
  ]
})
export class ClientViewModule { }
