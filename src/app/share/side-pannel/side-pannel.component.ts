import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.scss']
})
export class SidePannelComponent implements OnInit {
  public sidePannel = [
    {path:"dashboard/rides", name: "Rides"},
    {path:"dashboard/rides", name: "Drivers"},
    {path:"dashboard/earning-and-withdrawal", name: "Earning & Withdrawal"},
    {path:"dashboard/account", name: "Account"},
    {path:"dashboard/help-and-support", name: "Help & Support"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
