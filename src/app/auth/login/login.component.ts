import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, MinLengthValidator} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loader: boolean = false;
  public hide = true;
  constructor(
    private router: Router,
    private loginServices : AuthService
  ) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl ('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }


  // submit handeler
  login(){
    this.loader = true;
    console.log(this.loginForm.value);
    this.loginServices.login(this.loginForm.value).subscribe(
      (res:any)=>{
        console.log(res);
        this.loader = false;
        this.loginServices.setUser(res);
        this.router.navigate(['./dashboard/rides/rides']);
      },(error:any)=>{
        this.loader = false;
        this.router.navigate(['./dashboard/rides/rides']);
      },()=>{
        this.loader = false;
      }
    )
    
  }
  signUp(){
    this.router.navigate(['./signup']);
  }
}
