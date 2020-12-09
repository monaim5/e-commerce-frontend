import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupPayload} from "../../../core/models/signup-payload.model";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  singupPayload: SignupPayload;

  constructor(private authService: AuthService) {
    this.singupPayload = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  signup(): void{
    this.singupPayload.email = this.signupForm.get('email').value;
    this.singupPayload.password = this.signupForm.get('password').value;
    this.authService.signup(this.singupPayload).subscribe(data => {
      console.log(data);
    });
  }

}
