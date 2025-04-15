import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ServicesService } from '../../shared/services/services.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { I } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-my-books',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private service = inject(ServicesService);
  private router = inject(Router);

  myBooksList: any;
  gridCols = 3;
  // booksInLocalStorage: any = [];

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
    this.myBooksList = JSON.parse((localStorage.getItem('books')||'[]' ));

  }



  cards = this.breakpointObserver.observe([
    '(max-width: 530px)',
    '(max-width: 750px)',
    '(max-width: 1024px)',
    '(max-width: 1400px)',
    Breakpoints.WebLandscape
  ]).pipe(map((result:any) => {
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

    return this.myBooksList.map((x: any) => ({
        ...x,
        cols,
        rows
      }));
    })
  );

  onRead(id:any){
    this.router.navigate([`/readPdf/${id}`]);

  }

}
