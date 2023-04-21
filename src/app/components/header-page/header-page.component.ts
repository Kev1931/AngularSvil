import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
  template: '<ul><ng-content></ng-content></ul>'
})
export class HeaderPageComponent {
  @Input() titleFiglio: string = ""

  constructor(private router: Router){

}

goToProduct(){

  this.router.navigateByUrl("template/product");
}
goToClient(){

  this.router.navigateByUrl("template/client");
}
Logout(){

  this.router.navigateByUrl("login");
}

}
