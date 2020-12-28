import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {SigninPayload} from '../../../core/models/signin-payload.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signupForm: FormGroup;
  signinPayload: SigninPayload;

  constructor(private authService: AuthService) {
    this.signinPayload = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  signup(): void{
    this.signinPayload.email = this.signupForm.get('email').value;
    this.signinPayload.password = this.signupForm.get('password').value;

    this.authService.signin(this.signinPayload).subscribe(data => {
      console.log(data);
    });
  }

}

