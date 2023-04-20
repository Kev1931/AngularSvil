import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  @Input() titleFiglio: string = ""

  constructor(private router: Router){

  }


  goToProduct(){

    this.router.navigateByUrl("template/prodotto");
  }
  goToClient(){

    this.router.navigateByUrl("template/client");
  }
  Logout(){

    this.router.navigateByUrl("login");
  }

}
