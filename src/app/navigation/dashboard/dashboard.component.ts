import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ServicesService } from '../../shared/services/services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // styleUrl: './dashboard.component.scss',
  styleUrls: ['./dashboard.component.scss'],

  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private service = inject(ServicesService);
  private toaster = inject(ToastrService);

  booksList: any = this.service.getListOfBooks();
  gridCols = 3;
  booksInLocalStorage: any = [];

  ngOnInit() {

    this.breakpointObserver.observe([
      '(max-width: 530px)',
      '(max-width: 750px)',
      '(max-width: 1024px)' // or Breakpoints.Tablet
    ]).subscribe((result:any) => {
      if (result.breakpoints['(max-width: 530px)']) {
        this.gridCols = 1;
      } else if (result.breakpoints['(max-width: 750px)']) {
        this.gridCols = 2;
      } else {
        this.gridCols = 3;
      }
    });

  }



  cards = this.breakpointObserver.observe([
    '(max-width: 530px)',
    '(max-width: 750px)',
    '(max-width: 1024px)',
    '(max-width: 1400px)',
    Breakpoints.WebLandscape
  ]).pipe(
    map((result:any) => {
      let cols = 3;
      let rows = 1;

      if (result.breakpoints['(max-width: 530px)']) {
        cols = 1;
        rows = 2;
      } else if (result.breakpoints['(max-width: 750px)']) {
        cols = 1;
        rows = 2;
      } else if (result.breakpoints['(max-width: 1024px)']) {
        cols = 1;
        rows = 2;
      } else if (result.breakpoints['(max-width: 1400px)']) {
        cols = 1;
        rows = 1;
      } else if (result.breakpoints[Breakpoints.WebLandscape]) {
        cols = 1;
        rows = 1;
      }

      return this.booksList.map((x: any) => ({
        ...x,
        cols,
        rows
      }));
    })
  );



  onBuyNow(cardData: any) {
    this.booksInLocalStorage = JSON.parse(localStorage.getItem('books') || '[]');

    // this is to check if the data exist in localstorage or not, if it previously exist
    // then we fetch that data as to not lose the already bought books and push new bought book and set in localstorage.
    if (this.booksInLocalStorage) {
      this.booksInLocalStorage.push(cardData);

      localStorage.setItem("books", JSON.stringify(this.booksInLocalStorage));
      this.toaster.success('Congratulations!! Your have successfully purchased the Book.');
      setTimeout(() => {
        this.toaster.info('To read Your book, Go to "My Books" Page.')
      }, 1500); // 10 seconds later

    } else {
      // this is for the first time when we enter the data.
      localStorage.setItem("books", JSON.stringify([cardData]));
      this.toaster.success('Congratulations!! Your have successfully purchased the Book.');
      setTimeout(() => {       
        this.toaster.info('To read Your book, Go to "My Books" Page.')
      }, 1500); // 10 seconds later

    }

  }


}

