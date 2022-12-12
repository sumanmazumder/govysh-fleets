import { Component, OnInit, ViewChild } from '@angular/core';
import  { RidesService } from "../../../services/rides.service";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  public ridesData : any[] = [];
  public loader : boolean =  false;
  public fleetId: string = 'GVF20220008';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public tableHeader: any[] = [
    { label: 'Id', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone', key: 'phone' },
    { label: 'Status', key: 'status' },
    { label: 'Gender', key: 'gender' },
    { label: 'Vehicles Number', key: 'vehicleNumber' },
    { label: 'Action', key: 'action' },
  ];
  public allTableData : any;
  displayedColumns: any[] = [];
  public searchValue:string = "";




  constructor(private ridesService : RidesService) { }

  ngOnInit(): void {
    this.allRiderServices();
    this.displayedColumns = this.tableHeader.map((element: any) => {
      // console.log(element);
      return element.key
    });
  }
  getSellData(element: any, key: any) {
    return _.get(element, key) ? _.get(element, key) : '';
  }
  allRiderServices(){
    this.loader = true;
    this.ridesService.allRides(this.fleetId).subscribe(
      (res:any)=>{
        console.log(res);
        this.ridesData = res.data;
        this.allTableData = new MatTableDataSource<interfaceTableData>(res.data);
        this.loader = false;
      },(error:any)=>{
        console.log(error);
        this.loader = false;
      }
    )
  }
  // search
  applyFilter(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.allTableData.filter = this.searchValue.trim().toLowerCase();
    if (this.allTableData.paginator) {
      this.allTableData.paginator.firstPage();
    }
  }
  clearFilter(){
    this.searchValue = "";
  }

  deactivate(){

  }
}
export interface interfaceTableData {
  id: string,
  name: string,
  phone: string,
  email: string,
  status: string,
  gender: string,
  vehicleNumber: string,
  action: string,
}

const tableData : interfaceTableData[] = [
  {id: "GHJJ2144", name: "Tanima sen", phone: "987625845", email: "tanima@gmail.com", status: "pending", gender: "Female", vehicleNumber: "WB458-4789", action: ""},
  {id: "GHJJ2144", name: "Tanima sen", phone: "987625845", email: "tanimaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@gmail.com", status: "approve", gender: "Female", vehicleNumber: "WB458-4789", action: ""},
  {id: "GHJJ2144", name: "Tanima sen", phone: "987625845", email: "tanimaaaaaaaaaaaaaaaaaaaaa@gmail.com", status: "decline", gender: "Female", vehicleNumber: "WB458-4789", action: ""},
  {id: "GHJJ2144", name: "Tanima sen", phone: "987625845", email: "tanimatttttttt@gmail.com", status: "approve", gender: "Female", vehicleNumber: "WB458-4789", action: ""},
  {id: "GHJJ2144", name: "Tanima sen", phone: "987625845", email: "tanima@gmail.com", status: "pending", gender: "Female", vehicleNumber: "WB458-4789", action: ""}
]
