import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, MinLengthValidator} from "@angular/forms";
import { Router } from '@angular/router';
import { TosterService } from '../../services/toster.service';
import { AuthService } from '../../services/auth.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { OtpComponent } from "../../auth/otp/otp.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loader: boolean = false;
  public hide = true;
  private dialogConfig = new MatDialogConfig();

  constructor(
    private router: Router,
    private loginServices : AuthService,
    private tosterServices: TosterService,
    public dialog: MatDialog,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl ('', [Validators.required])
    });
    this.dialogConfig.disableClose = true;
    this.dialogConfig.width = '100%';
    this.dialogConfig.height = '100%';
    this.dialogConfig.maxWidth = '40vw';
    this.dialogConfig.maxHeight = '50vh';
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
        this.loginServices.setUser(res.data);
        this.dialogConfig.data = res.data.phone
        const dialogRef = this.dialog.open(OtpComponent, this.dialogConfig);
        dialogRef.afterClosed().subscribe((result:any) => {
          console.log('The dialog was closed', result);
          if(result){
            this.tosterServices.showSuccess("successfully", result)
            this.router.navigate(['./dashboard/rides/rides']);
          }
        });
        // this.router.navigate(['./dashboard/rides/rides']);
      },(error:any)=>{
        console.log(error)
        this.loader = false;
        this.tosterServices.showError("error", error.error.message)
      },()=>{
        this.loader = false;
      }
    )

  }
  signUp(){
    this.router.navigate(['./signup']);
  }
}
