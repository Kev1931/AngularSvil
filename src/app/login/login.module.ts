import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {  FailedDialogModule } from 'src/app/components/failed-dialog/failed-dialog.module';






@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    FailedDialogModule,
    


     ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
