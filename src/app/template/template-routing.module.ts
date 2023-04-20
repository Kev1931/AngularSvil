import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: "", component: TemplateComponent,
    children:[
      {
        path: "prodotto",
        loadChildren: () => import("../pages/product/product.module").then(m => m.ProductModule)
      },
      {
        path: "client",
        loadChildren: () => import("../pages/client/client.module").then(m => m.ClientModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
