import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../shared/services/services.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signup-page',
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {



  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toaster = inject(ToastrService);
  private  spinner = inject(NgxSpinnerService);
  private serviceServices = inject(ServicesService);


  ngOnInit(): void {

  }

  model: any = { email: '', password: '' }

 
  onSubmit(model: any) {
    this.model.email == this.model.email.trim();
    this.model.password == this.model.password.trim();
    var obj = {
      email: model.email,
      password: model.password,
    }

    this.serviceServices.signupDetails = obj;
    localStorage.setItem("email", obj.email)
    localStorage.setItem("password", obj.password)

    
    this.router.navigate(['/loginPage']);

  }

  onLogin(){
    this.router.navigate(['/loginPage']);

  }


  ngOnDestroy(): void {
    this.model = { email: '', password: '' }
  }
  
}
