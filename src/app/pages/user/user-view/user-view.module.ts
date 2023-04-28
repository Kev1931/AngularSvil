import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './user-view.component';
import { UserListModule } from '../user-list/user-list.module';
import { HeaderPageModule } from 'src/app/components/header-page/header-page.module';


@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    UserListModule,
    HeaderPageModule
  ]
})
export class UserViewModule { }
