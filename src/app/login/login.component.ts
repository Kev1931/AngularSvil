import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser } from 'src/app/models/IUser';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FailedDialogComponent } from '../components/failed-dialog/failed-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isHidden = true;
  name = "";

  formGroupLogin: FormGroup;
  loginError = false;
  users: IUser[] = [];
  private subscription!: Subscription;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, public dialog: MatDialog) {
    this.formGroupLogin = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users.map(user => ({
        ...user,
        userName: user.userName.trim(),
        password: user.password.trim()
      }));
    });
  }
  login() {
    const userName = this.formGroupLogin.value.userName.trim();
    const password = this.formGroupLogin.value.password.trim();
  
    const user = this.users.find(user => user.userName === userName && user.password === password);
    console.log(userName, password);
    if (user) {
      // Login riuscito!
      this.name = userName;
      this.userService.setCurrentUserName(userName);
      this.router.navigateByUrl("/template");
    } else {
      // Login fallito.
      const dialogRef = this.dialog.open(FailedDialogComponent, {
        width: '350px',
      });
    }
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();  // important to prevent memory leaks
    }
  }


  goToLogin() {
    this.isHidden = !this.isHidden;
  }
}