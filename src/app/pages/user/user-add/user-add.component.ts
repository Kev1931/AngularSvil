import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  userExists = false;
  userFormGroup: FormGroup;
  users: IUser[] = [];
  subscribeCurrentuserid?: Subscription;

  constructor(private fb: FormBuilder,
     private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog )
  {
    this.userFormGroup = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      idRole: [1]
    });
    this.userFormGroup.get('userName')?.valueChanges.subscribe(() => {
    this.userExists = false;
    });
  }
  addUser() {
    if(this.userFormGroup.valid) {
        const user: IUser = this.userFormGroup.value;
        this.userService.addUser(user).subscribe(
            response => {
                console.log(response);
                this.router.navigateByUrl("template/user");
                this._snackBar.open('Utente aggiunto con successo!!', 'Chiudi', {
                    duration: 4000,
                });
            },
            error => {
                if (error.status === 409) {
                    this.userExists = true;
                }
            }
        );
    }
    else {
        this.userFormGroup.markAllAsTouched();
    }
  }
}
