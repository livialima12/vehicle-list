import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { VehicleListService } from 'src/app/shared/services/vehicle-list.service';
import { VehicleSearchParamsModel } from 'src/app/vehicle-search/models/parse-models/vehicle-search-params.model';

@Component({
  selector: 'vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  searchParams: VehicleSearchParamsModel
  modelList = []
  pageEvent: PageEvent;


  constructor(
    private router: Router,
    private vehicleListService: VehicleListService
  ) { 
    this.searchParams = new VehicleSearchParamsModel(this.router.getCurrentNavigation()?.extras?.state?.data)
  }

  ngOnInit(): void {
    this.getModelList();
    console.log('searchParams', this.searchParams)
  }
  
  public getModelList(){
    this.vehicleListService.getModelList(this.searchParams).subscribe(modelList => {
      this.modelList = modelList
    })
  }

  getCardsInfo(){

    // this.modelList.forEach((vehicleModel: {}) => {
    //   const uniqueVehicleSearch = new UniqueVehicleSearchParamsModel({...this.searchParams, ...vehicleModel});
    //   this.vehicleListService.getVehiclesYear(uniqueVehicleSearch).subscribe(n => {
    //     console.log('%%%%%', n)
    //   })

    // })




    
    

  }




}
