import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArtsPhtography } from 'src/app/Models/ArtsPhotography';
import { BookShopService } from 'src/app/Shared/book-shop.service';
import { CartService } from 'src/app/Shared/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  
SelectedBookInfo:ArtsPhtography[];
quantitychangedBook:any;
subscription:Subscription;
public totalBooks:number=0;
public grandTotal:any;
public amount:any;
extraCharges=39;
quantity:any=1 ;
 totalprice: any;

  constructor(private BookShopService:BookShopService,private cartService:CartService) {}

   ngOnInit(): void {
  this.subscription= this.cartService.getBooks().subscribe(res=>{
    this.SelectedBookInfo=res;
    
    this.grandTotal=this.cartService.getTotalPrice();
    this.amount=this.grandTotal+this.extraCharges;   
  });

    this.cartService.getBooks().subscribe(res=>{
      this.totalBooks= res.length;
    })
   }

   RemoveItem(book:any){
    this.cartService.removeCartItem(book);
   }
   updateQuantity(QuantityBooks:any,Book:any)
   {
    console.log(QuantityBooks)
    this.cartService.GetTotalAmountByQuantity(QuantityBooks,Book); 
  
   }
   onEnter(value: string,Book:any)
   { 
     this.quantity= value;
     console.log(this.quantity)
     this.updateQuantity(this.quantity,Book)
    }

//    decreaseQuantity(quantity:any,Book:any)
//    {
//       if(quantity > 1){
//        this.quantity--;
//        console.log(this.quantity)
//         this.updateQuantity(this.quantity,Book)
//       }  
//    }
//    increaseQuantity(quantity:any,Book:any){
//     if(quantity != 0){
//       this.quantity++;
//       console.log(this.quantity)
//       this.updateQuantity(this.quantity,Book)
//     }  
//  }


                
}
