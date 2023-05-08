import { Component } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {
 
  displayAddress:boolean=false;

  showAddress(){
this.displayAddress= !this.displayAddress
  }
}
