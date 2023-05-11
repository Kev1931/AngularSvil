import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit{
  users: string[] = [];
  displayedColumns: string[] = ['userName'];
  dataSource;
  constructor(private router: Router, private Userservice: UserService)
  {
this.dataSource = this.Userservice.getUser();
  }
  ngOnInit(): void {
 /* this.Userservice.getUsersObservable.subscribe(resp => {
    this.filteredItems = resp;
  })*/
  }


}
