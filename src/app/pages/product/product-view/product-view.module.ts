import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';
import { ProductListModule } from '../product-list/product-list.module';


@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductViewRoutingModule,
    ProductListModule
  ]
})
export class ProductViewModule { }
