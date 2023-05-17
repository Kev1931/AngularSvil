import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogRoutingModule } from './confirm-dialog-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    ConfirmDialogRoutingModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
  ],
  exports:
  [
  ConfirmDialogComponent
  ]
})
export class ConfirmDialogModule { }
