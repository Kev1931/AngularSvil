import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    CommonModule,
    UserAddRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class UserAddModule { }
