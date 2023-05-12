import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  getUsers(){
    return this.httpClient.get<IUser[]>("http://192.168.0.31:81/api/user/users").subscribe(resp => {
    this.setUserObservable = resp;
  });

  }
  UpdateUsers(){
    return this.httpClient.get<IUser[]>("http://192.168.0.31:81/api/user/users");


  }
  UpdateUsersCombo(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>("http://192.168.0.31:81/api/user/users");
  }



  /*getUsers(): Observable<string[]> {
    return of(this.users);
  }*/


}

