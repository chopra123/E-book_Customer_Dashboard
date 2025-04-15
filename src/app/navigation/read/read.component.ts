import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-read',
  imports: [PdfViewerModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent  implements OnInit {
  private route = inject(ActivatedRoute);

  bookId: any;
  books: any;
  pagenumber:any=1;
  totalPages: any = 0;
  currentBook: any = [];
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  savedPageInLocal:any
  
  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
    this.currentBook = this.books.find((b: any) => b.id == this.bookId);

    this.pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; 
    

    this.savedPageInLocal = localStorage.getItem(`book_${this.bookId}_lastPage`);

    if (this.savedPageInLocal){
      this.pagenumber = this.savedPageInLocal;
    }
  }

  

  onPdfLoad(pdf:any){
    this.totalPages = pdf.numPages;
  }

  onPageChange(pageNumData: any) {
    this.pagenumber = pageNumData;
    // Save last read page
    localStorage.setItem(`book_${this.bookId}_lastPage`, pageNumData.toString());

    this.savingProgressByCategory();
  }

  savingProgressByCategory() {
    //In this we are saving progress by category, and to get that also i am creating a key,
    // Then i am checking and trying to fetch the data from that same name key from localstorage.
    // Then i am saving data on currentProgress and on id of the book id , so as to replace it,
    // the next time user came and read that pdf.
    
    //After creating the desired object then i set data in localstorage.

    var key = `progress_${this.currentBook.category}`;
    var currentProgress = JSON.parse(localStorage.getItem(key) || '{}');
    currentProgress[this.currentBook.id] = {
      title: this.currentBook.title,
      lastPage: this.pagenumber,
      totalPages: this.totalPages,
      percentage: Math.round((this.pagenumber / this.totalPages) * 100),
      category: this.currentBook.category
    };

    localStorage.setItem(key, JSON.stringify(currentProgress));

  }

}
