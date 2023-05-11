import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { Observable, of } from 'rxjs';

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
 private _usersBehavior = new BehaviorSubject<string[]>([]);

  get getUsersObservable()
  {
    return this._usersBehavior.asObservable();
  }
  set setUsersObservable(users: string[])
  {
   this._usersBehavior.next(users);
  }
  getUser(){

    return this.httpClient.get("http://192.168.0.31:81/api/user/users");
  }
  getUsers(): Observable<string[]> {
    return of(this.users);
  }
  

}

