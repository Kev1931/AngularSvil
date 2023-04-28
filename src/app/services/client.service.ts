import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _UserName = new BehaviorSubject<string>("");

  get getUserName(){
   return this._UserName.asObservable();
  }
 
  set setUserName(UserName: string){
   this._UserName.next(UserName);
  }
 
  constructor() { }
}
