import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { TosterService } from "../../services/toster.service";


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  public loader : boolean = false;
  public otp:string = "";
  private inputOtp:any;
  public buttonVisiable: boolean = false;
  public showMessage: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef :MatDialogRef<OtpComponent>,
    private authServices: AuthService,
    private tosterServices: TosterService
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.requestOTP();
  }
  requestOTP(){
    this.loader = true;
    let payload={
      phone: this.data
    }
    this.authServices.requestOTP(payload).subscribe(
      (success:any)=>{
        console.log(success);
        this.otp = success.data.otp
        this.tosterServices.showSuccess("success", success.status);
        this.loader = false;
      },(error:any)=>{
        this.tosterServices.showError("error", error.error.message);
        this.loader = false;
      },()=>{
        this.loader = false;
      }
    )
  }
  onOtpChange(event:any){
    console.log(event);
    this.inputOtp = event;
    if(this.inputOtp){
      this.buttonVisiable = true;
      // this.showMessage = false;
    }
  }
  otpHandelar(){
    this.loader = true;
    let payload= {
      username: this.data,
      otp: this.inputOtp
    }
    this.authServices.verifyOTP(payload).subscribe(
      (success:any)=>{
        console.log(success);
        this.loader = false;
        this.authServices.setToken(success.data);
        this.tosterServices.showSuccess("success", success.status);
        this.dialogRef.close(success);

      },(error:any)=>{
        console.log(error);
        this.loader = false;
        this.tosterServices.showError("error", error.error.message);
      }
    )
  }
}
