import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { startWith, debounceTime, switchMap, map } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { IUser } from 'src/app/models/IUser';
import { MatTableDataSource } from '@angular/material/table';


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

  listLength: number = 3;

  displayedColumns: string[] = ['id', 'userName' ,'password', 'actions'];

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

  constructor(private router: Router,
    private Userservice: UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,)
  {  }

  ngOnInit(): void {
    this.updateList();
   /* this.Userservice.getUsers().subscribe(users => {
      this.users = users;
      this.filteredItems = users;
    });*/
  }
  onSearchTextChanged(searchText: string): void {
    this.Ishidden = false;
    this.searchText = searchText;
    this.filteredItems = this.users.filter(users => users.toLowerCase().includes(searchText.toLowerCase()));
   // this.Userservice.setUserObservable = this.filteredItems;
    if (this.searchText == '')
    {
    this.Ishidden = true;
    }
  }
  private getAllList(){
    this.isLoading = true;
    this.userSubcription = this.Userservice.getUserObservable
    //this.userSubcription
      .subscribe((resp: IUser[])=>{
        this.list = resp;
        this.dataSource = new MatTableDataSource(this.list);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator?.firstPage();
        this.isLoading = false;
        console.log("users",this.list);
      },
    );
  }
  updateList(){
    //this.backupServic.backupsRefresher$;
    //this.Userservice.loadVulnerabilities();
    this.Userservice.getUsers();
    this.getAllList();
  }


  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.Userservice.DeleteUser(id).subscribe(resp => {
          this.updateList();
          this.snackBar.open('Utente eliminato con successo', 'Chiudi', {
            duration: 4000,
          });
        });

        console.log(id);
      }
    });
  }
  edit(id: number)
{
  this.Userservice.setCurrentUserId(id.toString());
  this.router.navigateByUrl("template/user-edit");
}
  // update(id: number)
  // {
  //   this.Userservice.editUser(id).subscribe(resp => {
  //   this.updateList();
  //   alert("L'utente è stato eliminato con successo:" + resp);
  //   })

  //   console.log();
  // }
  goToAdduser()
  {
  this.router.navigateByUrl("template/user-add");
  }
  goToEdituser()
  {
  this.router.navigateByUrl("template/user-edit");
  }
}



