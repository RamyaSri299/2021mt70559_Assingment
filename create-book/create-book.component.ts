import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { disableDebugTools } from '@angular/platform-browser';
import { BookList } from '../Model/BookList';
import { BookService } from '../Shared/Book-service';



@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  editdata: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private builder: FormBuilder, private BookData: BookService, private dialog: MatDialog,
  ) { }

  ngOnInit() {
    if (this.data.id != '' && this.data.id != null) {
      this.BookData.GetBookByID(this.data.id).subscribe(response => {
        this.editdata = response;
        this.BookForm.setValue({
          id: this.editdata.id, BookName: this.editdata.BookName, AuthorName: this.editdata.AuthorName,
          Price: this.editdata.Price
        })
      })
    }
  }
  BookForm = this.builder.group({
    id: this.builder.control({ value: '', disabled: true }),
    BookName: this.builder.control(this.data.BookName, Validators.required),
    AuthorName: this.builder.control(this.data.AuthorName, Validators.required),
    Price: this.builder.control(this.data.Price, Validators.required),
  });

  SaveBookData() {
    if (this.BookForm.valid) {
      const Editid = this.BookForm.getRawValue().id;
      if (Editid != '' && Editid != null) {
        this.BookData.UpdateBook(Editid, this.BookForm.getRawValue()).subscribe(response => {
          this.closePopup();
        alert("Updated Sucessfully");

        })
      } else {
        this.BookData.CreateBook(this.BookForm.value).subscribe(response => {
          this.closePopup();
          alert("Saved Sucessfully");

        })
      }

    }
  }

  closePopup() {
    this.dialog.closeAll();
  }

}
