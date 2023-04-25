import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';
import { ProductListModule } from '../product-list/product-list.module';
import { HeaderPageModule } from 'src/app/components/header-page/header-page.module';


@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductViewRoutingModule,
    ProductListModule,
    HeaderPageModule
  ]
})
export class ProductViewModule { }
