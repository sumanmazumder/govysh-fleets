import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, MinLengthValidator} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)])
    })
   }

  ngOnInit(): void {
  }


  // submit handeler
  login(){
    console.log(this.loginForm.value);
    this.router.navigate(['./dashboard/rides/rides'])
  }
}
