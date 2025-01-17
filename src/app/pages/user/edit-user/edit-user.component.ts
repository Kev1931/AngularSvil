import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnDestroy {

  userFormGroup: FormGroup;
  users: IUser[] = [];
  subscribeCurrentuserid?: Subscription;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
    )
  {
    this.userFormGroup = fb.group({
    id: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['',  Validators.required],
    idRole: [-1, Validators.required]
    });
  }
  ngOnDestroy(): void {
   this.subscribeCurrentuserid?.unsubscribe();
  }
  ngOnInit(): void {
    this.subscribeCurrentuserid == this.userService.currentUserId$.subscribe(id => {
      if (id) {
        this.userService.getEditUsers().subscribe(users => {
          this.users = users;
          this.edit(id);
        });
      } else {
        console.log("errore ID non trovato");
      }
    });
  }

  edit(userId: string): void {
    // Trova l'utente che vuoi modificare...
    const userToEdit = this.users.find(user => user.id.toString() === userId);

    // Inizializza il tuo form con i dati dell'utente che intendi modificare...
    if (userToEdit) {
      this.userFormGroup.setValue({
        id: userToEdit.id,
        userName: userToEdit.userName.trim(),
        password: userToEdit.password.trim(),
        idRole: userToEdit.idRole,
        // Imposta qui gli altri campi...
      });
    }
  }

  onSubmit(): void {
    if (this.userFormGroup.valid) {
      const user: IUser = this.userFormGroup.value;
      this.userService.editUser(user).subscribe(
        response => {
          console.log(response);
          this.router.navigateByUrl("template/user");
          this._snackBar.open('Modifica effettuata con successo', 'Chiudi', {
            duration: 4000,
          });
        }
      );
    }
    else
    {
      this.userFormGroup.markAllAsTouched();
    }
  }

  editUser()
  {
    this.userService.editUser(this.userFormGroup.value).subscribe(resp => {
    this.router.navigateByUrl("template/user");

      })
  }
  }



