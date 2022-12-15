import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss']
})
export class SidePannelComponent implements OnInit {
  public fleetUserData:any;
  public fleetId : any;
  public contactPersonName: any;
  public sidePannel = [
    {path:"/dashboard/rides/rides", name: "Rides"},
    {path:"/dashboard/drivers/driver", name: "Drivers"},
    {path:"/dashboard/earning-and-withdrawal/earning-and-withdrawal", name: "Earning & Withdrawal"},
    {path:"/dashboard/account/account", name: "Account"},
    {path:"/dashboard/help-and-support/help-and-support", name: "Help & Support"},
    // {path:"", name: "Log out"},
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.localStogageData();

  }

  localStogageData(){
    let data = localStorage.getItem('fleetUserDetails');
    this.fleetId = localStorage.getItem('fleetId');
    if(data){
      // setTimeout()
      console.log(data);
      let fleetUserData = JSON.parse(data);
      this.contactPersonName = fleetUserData?.contactPersonName;
      console.log(this.contactPersonName);
    }
  }
  // ngAfterViewInit(){
  //   console.log("after view init");
  //   setTimeout(this.localStogageData, 5000)
  // }
  logOut(){
    localStorage.removeItem('fleetUserDetails')
    localStorage.removeItem('apiToken')
    localStorage.removeItem('tokenDetails')
    localStorage.removeItem('Phone')
    localStorage.removeItem('fleetId')
    localStorage.removeItem('contactPersonName')
    this.router.navigate(['./login']);
  }
}
