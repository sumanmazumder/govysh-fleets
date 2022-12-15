import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
import { TosterService } from 'src/app/services/toster.service';
import { AuthService } from "../../services/auth.service";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { OtpComponent } from "../../auth/otp/otp.component";

import {
  CountryISO,
  SearchCountryField,
  // TooltipLabel
} from "ngx-intl-tel-input";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public signupForm: FormGroup;
  public loader:boolean = false;
  public hide = true;
  // private dialCode: string = "";

  // CountryISO = CountryISO;
  // SearchCountryField = SearchCountryField;
  // preferredCountries: CountryISO[] = [
  //   CountryISO.UnitedStates,
  //   CountryISO.UnitedKingdom
  // ];
  private dialogConfig = new MatDialogConfig();









  constructor(
    private router: Router,
    private signUpService: AuthService,
    private tosterServices: TosterService,
    private loginServices: AuthService,
    public dialog: MatDialog,
  ) {
    this.signupForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      address: new FormControl('', [Validators.required]),
      postalCode : new FormControl('', [Validators.required]),
      numberOfVehicles : new FormControl('', [Validators.required]),
      typeOfVehicles : new FormControl('', [Validators.required]),
      numberOfDrivers : new FormControl('', [Validators.required]),
      contactPersonName : new FormControl('', [Validators.required]),
      websiteLink : new FormControl('govysh.com'),
      countryCode: new FormControl(''),
    });
    this.dialogConfig.disableClose = true;
    this.dialogConfig.width = '100%';
    this.dialogConfig.height = '100%';
    this.dialogConfig.maxWidth = '30vw';
    this.dialogConfig.maxHeight = '40vh';
   }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate([`./login`])
  }
  signUp(){
    // this.signupForm.patchValue({
    //   // countryCode: this.dialCode
    // })
    console.log(this.signupForm.value);
    this.loader = true;
    this.signUpService.signUp(this.signupForm.value).subscribe(
      (res:any)=>{
        console.log(res);
        this.loader = false;
        this.loginServices.setUser(res.data);
        this.dialogConfig.data = res.data.phone
        if(res.data.phone){
          const dialogRef = this.dialog.open(OtpComponent, this.dialogConfig);
          dialogRef.afterClosed().subscribe((result:any) => {
            console.log('The dialog was closed', result);
            if(result){
              this.tosterServices.showSuccess("successfully", result)
              this.router.navigate(['./dashboard/rides/rides']);
            }
          });
        }
      },(error:any)=>{
        this.loader = false;
        console.log(error);
        this.tosterServices.showError("error", error.error.message);
      },()=>{
        this.loader = false;
      }
    )
  }


  // countryCode(event:any){
  //   console.log(event);
  //   this.dialCode = `+${event.dialCode}`
  // }
  yourComponentMethodToTreatyCountryChangedEvent(event:any){
    console.log(event);
    this.signupForm.patchValue({
      countryCode: `+${event.dialCode}`
    })
  }
  // phoneNoChangeHandeler(event:any){
  //   console.log(event);
  // }
}
