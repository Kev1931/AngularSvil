import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  userFormGroup: FormGroup;
  users: IUser[] = [];
  

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router)
  {
    this.userFormGroup = fb.group({
    userName: [''],
    password: [''],
    idRole: [-1]
    });
  }
  ngOnInit(): void {
    // Carica la lista degli utenti...
  }

  edit(userId: string): void {
    // Trova l'utente che vuoi modificare...
    const userToEdit = this.users.find(user => user.id === userId);

    // Inizializza il tuo form con i dati dell'utente che intendi modificare...
    if (userToEdit) {
      this.userFormGroup.setValue({
        id: userToEdit.id,
        userName: userToEdit.userName,
        password: userToEdit.password,
        idRole: userToEdit.idRole,
        // Imposta qui gli altri campi...
      });
    }
  }

  onSubmit(): void {
    const user: IUser = this.userFormGroup.value;
    this.userService.editUser(user).subscribe(
      response => {
        console.log(response);
        // Gestisci qui la risposta...
      },
      error => {
        console.error(error);
        // Gestisci qui gli errori...
      }
    );
  }
  
  editUser()
  {
    this.userService.editUser(this.userFormGroup.value).subscribe(resp => {
    this.router.navigateByUrl("template/user");

      })
  }
}
