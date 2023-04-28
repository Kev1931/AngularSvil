import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderPageComponent } from './header-page.component';

const routes: Routes =
[
  {
    path: "", component: HeaderPageComponent,
    children:[
      {
        path: "prodotto",
        loadChildren: () => import("../../pages/product/product-view/product-view.module").then(m => m.ProductViewModule)
      },
      {
        path: "client",
        loadChildren: () => import("../../pages/client/client-view/client-view.module").then(m => m.ClientViewModule)
      },
      {
        path: "user",
        loadChildren: () => import("../../pages/user/user-view/user-view.module").then(m => m.UserViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderPageRoutingModule { }
