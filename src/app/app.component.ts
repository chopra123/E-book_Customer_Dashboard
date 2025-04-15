import { Component, inject, isStandalone } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 // Registers ToastConfig and ToastrService]
  
})
export class AppComponent {
  title = 'E-book_Customer';

  private toastr = inject(ToastrService);

}
