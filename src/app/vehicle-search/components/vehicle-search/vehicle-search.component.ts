import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationRoutes } from 'src/app/settings/routes/application-routes.helper';

import { VehicleListService } from '../../../shared/services/vehicle-list.service';
import { BrandList } from '../../models/interfaces/brand-list.interface';
import { VehicleSearchParamsModel } from '../../models/parse-models/vehicle-search-params.model';

@Component({
  selector: 'vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.scss']
})
export class VehicleSearchComponent implements OnInit {

  searchForm: FormGroup;
  vehicleForm: FormGroup;
  brandList: Array<BrandList>;

  constructor(
    private vehicleListService: VehicleListService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setupVehicleForm();
    this.setupSearchForm();
  }

  private setupVehicleForm(){
    this.vehicleForm = this.formBuilder.group({
      vehicleType: ['', Validators.required]
    });
    this.vehicleForm.valueChanges.subscribe(formValues => {
      this.getBrandList(formValues.vehicleType)
    })
  }

  private setupSearchForm(){
    this.searchForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      model: [''],
    })
  }

  private getBrandList(vehicleType: string): void{
    const brandListByType = []
    this.vehicleListService.getBrandList(vehicleType)
    .subscribe((res: any) => {
      res.forEach(element => {
        brandListByType.push({name: element.fipe_name, id:element.id})
      });
    })
    this.brandList = brandListByType;
  }


  public submitForm() {
    const data = new VehicleSearchParamsModel({...this.searchForm.value, ...this.vehicleForm.value});
    this.router.navigate([ApplicationRoutes.VEHICLE_LIST], {state: {data}})
  }
}
