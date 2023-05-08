import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookComponent } from '../create-book/create-book.component';
import { BookList } from '../Model/BookList';
import { BookService } from '../Shared/Book-service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  BookDetails!: BookList[];
  displayedColumns = ['id', 'BookName', 'AuthorName', 'Price', 'Action'];

  ngOnInit(): void {
    this.LoadBookdata();
  }
  constructor(private dialog: MatDialog, private Bookdata: BookService) {

  }
  PopUpAddBook(id: any) {
    const _popup = this.dialog.open(CreateBookComponent, {
      width: '500px',
      exitAnimationDuration: '1000ms',
      enterAnimationDuration: '1000ms',
      data: {
        id: id
      }
    })
    _popup.afterClosed().subscribe(r => {
      this.LoadBookdata();
    })
  }

  LoadBookdata() {
    this.Bookdata.GetBookList().subscribe(response => {
      this.BookDetails = response;
    })
  }

  EditBookData(id: number) {
    this.PopUpAddBook(id);
  }
  DeleteBook(id: number) {
   
      this.Bookdata.RemoveBookByID(id).subscribe(response => {
        this.LoadBookdata();
      });
   
    
 
   

  }
 
    
}



