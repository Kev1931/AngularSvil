import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
  template: '<ul><ng-content></ng-content></ul>'
})
export class HeaderPageComponent implements OnInit {
  @Input() titleFiglio: string = ""
  @Input() cliente: string =""

  constructor(private router: Router,
     private productService: ProductService,
      private clientServices: ClientService,
      private userService: UserService){

}

inputCounter: number = 0;
UserName: string = "";
numero: number = 1;
  ngOnInit(): void {
    this.userService.currentUserName$.subscribe(userName => {
      if (userName) {
        this.UserName = userName;
      }
    });
    //throw new Error('Method not implemented.');
    this.productService.getCounter.subscribe(resp =>{

      this.inputCounter = resp;
  });
  //@Input() inputCounter: number = 0;
  if (this.numero > 2) {
    this.clientServices.getUserName.subscribe(resp=>{
      this.UserName=resp;
  });
}
else
{
}
}




goToProduct(){

  this.router.navigateByUrl("template/product");
}
goToClient(){

  this.router.navigateByUrl("template/client");
}
goToUser(){

  this.router.navigateByUrl("template/user");
}
Logout(){

  this.router.navigateByUrl("login");
}



}


