import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailedDialogRoutingModule } from './failed-dialog-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FailedDialogRoutingModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class FailedDialogModule { }
