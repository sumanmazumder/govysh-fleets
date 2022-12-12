import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  public driverData : any[] = [];
  public fleetId: string = 'GVF202201';
  public loader :boolean = false;
  public tableHeader: any[] = [
    { label: 'Id', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private driverServices: DriverService
  ) { }

  ngOnInit(): void {
    this.driverList();
    this.displayedColumns = this.tableHeader.map((element: any) => {
      // console.log(element);
      return element.key
    });
  }
  getSellData(element: any, key: any) {
    return _.get(element, key) ? _.get(element, key) : '';
  }
  driverList(){
    this.loader = true;
    this.driverServices.driverList(this.fleetId).subscribe(
      (res:any)=>{
        console.log(res);
        this.driverData = res.data;
        this.allTableData = new MatTableDataSource<interfaceTableData>(res.data)
        this.loader = false
      },(error:any)=>{
        console.log(error);
        this.loader = false;
      },()=>{
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
  firstName : string,
  lastName: string,
  phone: string,
  email: string,
  status: string,
  gender: string,
  vehicleNumber: string,
  action: string,
}