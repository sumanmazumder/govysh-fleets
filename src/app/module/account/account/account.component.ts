import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { TosterService } from '../../../services/toster.service';
import { FormGroup, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  private fleetId : string = "GVF2022067";
  public loader: boolean = false;
  public fleetDetailsForm : FormGroup;
  public status:any[] = [
    {value: 'Active', viewValue: 'Active'},
    {value: 'InActive', viewValue: 'InActive'},
  ];
  public accountEditable:boolean = false;
  constructor(
    private accountServices: AccountService,
    private tosterService: TosterService
  ) {
    this.fleetDetailsForm = new FormGroup({
      fleetId: new FormControl(''),
      companyName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      numberOfVehicles: new FormControl('', [Validators.required]),
      typeOfVehicles: new FormControl('', [Validators.required]),
      numberOfDrivers: new FormControl('', [Validators.required]),
      stripeCustId: new FormControl('', [Validators.required]),
      commissionRate: new FormControl('', [Validators.required]),
      contactPersonName: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      websiteLink: new FormControl('govysh.com', [Validators.required]),
    })
   }

  ngOnInit(): void {
    this.accountDetails();
  }

  accountDetails(){
    this.loader = true;
    this.accountServices.accountDetails(this.fleetId).subscribe(
      (success:any)=>{
        console.log(success);
        this.fleetDetailsForm.patchValue(success.data);
        this.loader = false;
        this.fleetDetailsForm.disable();
      },(error:any)=>{
        console.log(error);
        this.loader = false;
        this.tosterService.showError("error", error.error.message);
      },()=>{
        this.loader = false;
      }
    )
  }
  fleetEdit(){
    this.fleetDetailsForm.enable();
    this.accountEditable = true;
  }
  accountSubmitHandeler(){
    console.log(this.fleetDetailsForm.value);
    this.loader = true;
    this.accountServices.accountUpdate(this.fleetDetailsForm.value).subscribe(
      (success:any)=>{
        console.log(success);
        this.loader = false;
        this.tosterService.showSuccess("success", success.status);
      },(error:any)=>{
        console.log(error);
        this.loader = false;
        this.tosterService.showError("success", error.error.message);
      },()=>{
        this.loader = false;
      }
    )
  }
}
