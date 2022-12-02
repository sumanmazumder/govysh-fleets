import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss']
})
export class SidePannelComponent implements OnInit {
  public sidePannel = [
    {path:"/dashboard/rides/rides", name: "Rides"},
    {path:"/dashboard/drivers/driver", name: "Drivers"},
    {path:"/dashboard/earning-and-withdrawal/earning-and-withdrawal", name: "Earning & Withdrawal"},
    {path:"/dashboard/account/account", name: "Account"},
    {path:"/dashboard/help-and-support/help-and-support", name: "Help & Support"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
