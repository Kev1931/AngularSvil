import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


 isHidden=true;
 name:string="";

  formGroupLogin: FormGroup;

  isValid: boolean = false;

  users: any;



  constructor(private router: Router, private fb: FormBuilder, private userService: UserService){
    this.formGroupLogin = fb.group({
      user: ['',Validators.minLength(3)],
      password: ['',Validators.minLength(3)]
    });

  }


  login(){

    this.isValid = this.formGroupLogin.valid;
    if(this.formGroupLogin.valid){
      console.log(this.formGroupLogin.value)
      this.name=this.formGroupLogin.value.name;
    }

     this.userService.getUser().subscribe(resp =>{
       console.log(resp);
       console.log(this.formGroupLogin.value)
       this.users = resp;
     })

  }


  goToTemplate(){

     this.router.navigateByUrl("template");
    //this.UserName="mario";
  }
  goToLogin(){


    this.isHidden=!this.isHidden;

 }




}

