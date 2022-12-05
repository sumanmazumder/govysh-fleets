import { Component, OnInit } from '@angular/core';
import  { RidesService } from "../../../services/rides.service";

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {

  public fleetId: string = 'GVF20220008';
  constructor(private ridesService : RidesService) { }

  ngOnInit(): void {
    this.allRiderServices();
  }

  allRiderServices(){
    this.ridesService.allRides(this.fleetId).subscribe(
      (res:any)=>{
        console.log(res);
      },(error:any)=>{
        console.log(error);
      }
    )
  }
}
