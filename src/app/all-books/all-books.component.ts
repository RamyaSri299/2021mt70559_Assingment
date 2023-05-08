import { Component, OnInit } from '@angular/core';
import { ArtsPhtography } from '../Models/ArtsPhotography';
import { ArtsPhotographyDatum } from '../Models/ArtsPhotographyData';
import { BookShopService } from '../Shared/book-shop.service';
import {MatDialog} from '@angular/material/dialog';
import { CartService } from '../Shared/cart.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  GetAllBooks: ArtsPhotographyDatum[]=[];
  GetBookType: ArtsPhotographyDatum[]=[];
  BookType: string;
  public BookList:any;

  constructor(private bookService: BookShopService,private cartService:CartService) {

  }
  ngOnInit() {
    this.GetBookDetails();
    this.FilterBookTypes(this.BookType);

  }

  GetBookDetails() {
    this.bookService.GetBookList().subscribe(data => {
      if (data != null) {
        this.GetBookType = data;
        this.GetAllBooks=data;
      }
    });
  }

  FilterBookTypes(bookType: string) {
    this.GetAllBooks = this.GetBookType.filter(x => x.subTypeOfBook == bookType);
    
  }

  addtoCart(Book:ArtsPhtography)
  {
   this.cartService.addtoCart(Book);
  }


}
