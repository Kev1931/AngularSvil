import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(userName: any, password: any) {
    throw new Error('Method not implemented.');
  }
  getAllList() {
    throw new Error('Method not implemented.');
  }
 private users = [
  'paul',
  'valentina',
  'kevin',
  'maurizio',
  'luciano',
  'elena',
  'test',
  'tizio',
  // ...

];
  UserRefresher$: any;
  constructor(private httpClient: HttpClient) { }
 //private _usersBehavior = new BehaviorSubject<string[]>([]);
 private _userBehavior = new BehaviorSubject<IUser[]>([])

 private _currentUserId = new BehaviorSubject<string | null>(null);
  currentUserId$ = this._currentUserId.asObservable();

  private _currentUserName = new BehaviorSubject<string | null>(null);
  currentUserName$ = this._currentUserName.asObservable();


get getUserObservable()
{
  return this._userBehavior.asObservable();
}
set setUserObservable(users: IUser[])
{
  this._userBehavior.next(users);
}

 /* get getUsersObservable()
  {
    return this._usersBehavior.asObservable();
  }
  set setUsersObservable(users: string[])
  {
   this._usersBehavior.next(users);
  }*/
  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>("http://localhost:5110/api/User/users").pipe(
      tap((resp: IUser[]) => {
        this.setUserObservable = resp;
      })
    );
  }

  setCurrentUserName(name: string) {
    this._currentUserName.next(name);
  }

  UpdateUsers(){
    return this.httpClient.get<IUser[]>("http://localhost:5110/api/User/users");


  }
  UpdateUsersCombo(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>("http://localhost:5110/api/User/users");
  }
  addUser(user: IUser) {
    return this.httpClient.post("http://localhost:5110/api/User/addUser", user);
  }
  DeleteUser(id:number) {
    return this.httpClient.delete("http://localhost:5110/api/User/deleteUser?id=" + id);
  }
  /*editUser() {
    return this.httpClient.put("http://localhost:5110/api/User/updateUser");
  }*/
 setCurrentUserId(id: string) {
    this._currentUserId.next(id);
  }

  editUser(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>("http://localhost:5110/api/User/updateUser", user);
  }

  getEditUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>("http://localhost:5110/api/User/users");
  }

  /*getUsers(): Observable<string[]> {
    return of(this.users);
  }*/
  loginUser(userName: string, password: string): Observable<{isSuccess: boolean, token?: string}> {
    return this.httpClient.post<{isSuccess: boolean, token?: string}>(
      "http://localhost:5110/api/User/template",
      { userName, password }
    );
  }

}

