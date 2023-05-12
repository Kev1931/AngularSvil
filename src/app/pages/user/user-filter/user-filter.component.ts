import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit{
  searchText = '';
  users: IUser[] = [];
  filteredItems: IUser[] = [];
  Ishidden = true;

  listLength: number = 3;

  displayedColumns: string[] = ['id', 'userName' ,'password'];

  public UserSubcription?: Subscription;

  public list: IUser[] = [];
  public dataSource: MatTableDataSource<IUser> = new MatTableDataSource<IUser>([]);
  public backupSelected?: IUser;

  public isLoading: Boolean = true;

  @ViewChild(MatSort, {static:true}) sort: any;
  @ViewChild(MatPaginator, {static:true}) paginator: any;
  httpClient: any;
  userSubcription: any;
  shareService: any;
  constructor(private router: Router, private Userservice: UserService){}

  ngOnInit() {
    this.Userservice.UpdateUsersCombo().subscribe(resp => {
      this.filteredItems = resp
      this.Userservice.setUserObservable = this.filteredItems;
      this.users = this.filteredItems;
    });
  }
  onSearchTextChanged(searchText: string): void {
    this.Userservice.UpdateUsersCombo().subscribe(resp => {
    this.filteredItems = resp.filter(user => user.userName.toLowerCase().includes(searchText.toLowerCase()));
    this.Userservice.setUserObservable = this.filteredItems;
    this.users = this.filteredItems;
   });

    this.Ishidden = false;
    this.searchText = searchText;

    if (this.searchText == '')
    {
    this.Ishidden = true;
    }


  }
  onRoleSelectionChange(selectedRole: string): void {
    this.searchText = selectedRole
    this.Userservice.UpdateUsersCombo().subscribe(resp => {
      this.filteredItems = resp.filter(user => user.idRole === selectedRole);
      this.Userservice.setUserObservable = this.filteredItems;
      this.users = this.filteredItems;
    });
  }
}
