import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    CommonModule,
    UserAddRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UserAddModule { }
