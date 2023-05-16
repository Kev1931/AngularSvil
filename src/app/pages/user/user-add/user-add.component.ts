import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  userFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router)
  {
    this.userFormGroup = fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    idRole: [1]
    });
  }
  addUser()
  {
    if(!this.userFormGroup.valid)
    {
      alert("I campi userName e password non sono validi");
      return;
    }
    this.userService.addUser(this.userFormGroup.value).subscribe(resp => {
    this.router.navigateByUrl("template/user");

      })
  }
}
