import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';
import { HeaderPageModule } from '../components/header-page/header-page.module';



@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    RouterModule,
    HeaderPageModule,
   
  ],
  exports:[
    TemplateComponent
  ]
})
export class TemplateModule { }
