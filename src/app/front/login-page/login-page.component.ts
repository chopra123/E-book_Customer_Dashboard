import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../shared/services/services.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import jwtEncode from 'jwt-encode';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toaster = inject(ToastrService);
  private spinner = inject(NgxSpinnerService);
  private serviceServices = inject(ServicesService);

  ngOnInit(): void {
  }

  model: any = { email: '', password: '' }

  savedUserDetails: any;
  
  payload = {
    sub: '1234567890',
    name: 'Puneet Chopra',
    role: 'admin',
    exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1 hour from now
  };

  mySecret: any = 'Puneet-secret'; // Only used for dev. Not needed for decoding later
  token: any = jwtEncode(this.payload, this.mySecret);


  onSubmit(model: any) {

    this.model.email == this.model.email.trim();
    this.model.password == this.model.password.trim();
    var obj = {
      email: model.email,
      password: model.password,
    }

    this.savedUserDetails = this.serviceServices.signupDetails;

  

    var email: any;
    var password: any;

    email = localStorage.getItem("email");
    password = localStorage.getItem("password");

    if (email == obj.email && password == obj.password) {
      alert('Email and Password Matched Successfully.')
      this.toaster.success('Email and Password Matched Successfully.');

      localStorage.setItem("token", this.token)
      this.router.navigate(['/dashboard']);
    }else{
      this.toaster.error('Email and Password do not Match Successfully.');

    }



  }

  onSignup(){
    this.router.navigate(['/signupPage']);

  }


  ngOnDestroy(): void {
    this.model = { email: '', password: '' }
  }

}
