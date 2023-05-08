import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ArtsPhtography } from '../Models/ArtsPhotography';
import { BookShopService } from './book-shop.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  BooksInfo:any;
  public cartItemList: any = [];
  public BookList = new BehaviorSubject<any>([]); //act as bool, emit, subscribe
  grandTotalprice: any;
  OriginalPrice:number;
 quantityIncBook:ArtsPhtography=new ArtsPhtography();
 BookInfo:any;

  constructor(private bookshopService:BookShopService) { }

  getBooks() {
    return this.BookList.asObservable(); 
  }

  setBooks(Book: any) {
    this.cartItemList.push(...Book);
    this.BookList.next(Book);
  }

  addtoCart(Book: any) {
    this.cartItemList.push(Book);
    this.BookList.next(this.cartItemList);
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.totalPrice;
    })
    return grandTotal;
  }

  GetTotalAmountByQuantity(quantity: number,Book:any) {
     let TotalPrice = 0;
  
    console.log(this.OriginalPrice)
    this.cartItemList.map((a:any) => {
        this.OriginalPrice=Book.price
        Book.totalPrice = quantity*this.OriginalPrice
    })
    this.BookList.next(this.cartItemList);
   
  //   this.bookshopService.GetBooksInfo().subscribe(result=>{
  //       this.BookInfo=result.filter(x=>x.bookId==Book.bookId);
  //      console.log(this.BookInfo);
  //   })
  //      this.BookInfo.filter(x=>{
  //   this.OriginalPrice=x.price
  //  })
  //  console.log(this.OriginalPrice)
  //  TotalPrice=quantity*this.OriginalPrice;
   
   
  //  // TotalPrice=Book.price;
  //  // console.log(TotalPrice)
  //   return TotalPrice;
    
      
  }

  removeCartItem(Book: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (Book.bookId === a.bookId) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.BookList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.BookList.next(this.cartItemList);
  }
}

