import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public signupForm: FormGroup;
  public loader:boolean = false;
  public hide = true;
  constructor(
    private router: Router,
    private signUpService: AuthService
  ) {
    this.signupForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormControl('', [Validators.required]),
      postalCode : new FormControl('', [Validators.required]),
      numberOfVehicles : new FormControl('', [Validators.required]),
      typeOfVehicles : new FormControl('', [Validators.required]),
      numberOfDrivers : new FormControl('', [Validators.required]),
      contactPersonName : new FormControl('', [Validators.required]),
      websiteLink : new FormControl('govysh.com'),
    })
   }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate([`./login`])
  }
  signUp(){
    console.log(this.signupForm.value);
    this.loader = true;
    this.signUpService.signUp(this.signupForm.value).subscribe(
      (res:any)=>{
        console.log(res);
        this.loader = false;
        this.router.navigate(['./dashboard/rides/rides'])
      },(error:any)=>{
        this.loader = false;
      },()=>{
        this.loader = false;
      }
    )
  }
}
