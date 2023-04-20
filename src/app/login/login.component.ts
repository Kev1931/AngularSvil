import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() titleFiglio: string = ""

  constructor(private router: Router){

  }


  goToTemplate(){

    this.router.navigateByUrl("template");
  }
}
