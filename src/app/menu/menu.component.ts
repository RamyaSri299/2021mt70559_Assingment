import { Component } from '@angular/core';
import { ArtsPhotographyDatum } from '../Models/ArtsPhotographyData';
import { BookShopService } from '../Shared/book-shop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  GetAllBooks:ArtsPhotographyDatum[];
  GetBookType:ArtsPhotographyDatum[];
  BookType:string;
  
  constructor(private bookService:BookShopService){
  
  }
  ngOnInit(){
   this.GetBookDetails();
   this.FilterBookTypes('');
  }
   
  GetBookDetails(){
    this.bookService.GetBookList().subscribe(data=>{
      if(data!=null){
        this.GetAllBooks=data;   
        console.log(this.GetAllBooks);
      }
    })
  }

  FilterBookTypes(bookType:string){
     this.bookService.GetBookList().subscribe(data=>{
      if(data!=null){
        this.GetBookType=data;
       this.GetAllBooks=this.GetBookType.filter(x=>x.subTypeOfBook==bookType);
        console.log(this.GetBookType);
      }
     })
    }
}
