import { Component} from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {

  counterView: number = 0;

  counter(event: number){
    this.counterView = event;
  }
}
