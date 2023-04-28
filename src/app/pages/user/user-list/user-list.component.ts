import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { startWith, debounceTime, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit   {

  searchText = '';
  users: string[] = [];
  filteredItems: string[] = [];
  Ishidden = true;
  constructor(private router: Router, private Userservice: UserService)
  {  }
  ngOnInit(): void {
    this.Userservice.getUsers().subscribe(users => {
      this.users = users;
      this.filteredItems = users;
    });
  }
  onSearchTextChanged(searchText: string): void {
    this.Ishidden = false;
    this.searchText = searchText;
    this.filteredItems = this.users.filter(users => users.toLowerCase().includes(searchText.toLowerCase()));
    if (this.searchText == '')
    {
    this.Ishidden = true;
    }
  }
}



