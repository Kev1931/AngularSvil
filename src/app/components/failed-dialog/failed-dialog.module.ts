import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailedDialogRoutingModule } from './failed-dialog-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FailedDialogComponent } from './failed-dialog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FailedDialogComponent,
  ],
  imports: [
    CommonModule,
    FailedDialogRoutingModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ],
  exports:
  [
  FailedDialogComponent
  ]
})
export class FailedDialogModule { }
