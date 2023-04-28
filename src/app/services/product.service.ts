import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private _counterBehaviour = new BehaviorSubject<number>(0);

 get getCounter(){
  return this._counterBehaviour.asObservable();
 }

 set setCounter(counter: number){
  this._counterBehaviour.next(counter);
 }

  constructor() { }
}