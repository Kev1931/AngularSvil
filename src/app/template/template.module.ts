import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';
import { HeaderPageModule } from '../components/header-page/header-page.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    RouterModule,
    HeaderPageModule,
    HeaderPageModule

   
  ],
  exports:[
    TemplateComponent
  ]
})
export class TemplateModule { }
