import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Output() eventCounter = new EventEmitter<number>()

  counterList: number = 0;

  counter(){
    this.counterList++;
    this.eventCounter.emit(this.counterList++);
  }
}
