import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserExistDialogRoutingModule } from './user-exist-dialog-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UserExistDialogComponent } from './user-exist-dialog.component';


@NgModule({
  declarations: [UserExistDialogComponent],
  imports: [
    CommonModule,
    UserExistDialogRoutingModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ],
  exports:
  [
  UserExistDialogComponent
  ]
})
export class UserExistDialogModule { }
