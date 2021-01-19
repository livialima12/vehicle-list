import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationRoutes } from 'src/app/settings/routes/application-routes.helper';
import { VehicleListService } from 'src/app/shared/services/vehicle-list.service';

@Component({
  selector: 'vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent implements OnInit {

  @Input() cardInfo;
  @Input() vehicleType;
  @Input() brandId;

  vehicleVariation;
  vehiclePrice;
  vehicleDetails;
  showYearSelection: boolean;
  year = new FormControl();

  constructor(
    private vehicleService: VehicleListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.year.valueChanges.subscribe(yearId => this.showPrice(yearId))
  }

  cards(){
    this.showYearSelection = true;
    this.vehicleService
      .getVehiclesVariation(this.vehicleType, this.brandId, this.cardInfo.id)
      .subscribe(vehicleVariation => this.vehicleVariation = vehicleVariation)
  }

  showPrice(yearId: string) {
    this.vehicleService
      .getVehiclesPrice(this.vehicleType, this.brandId, this.cardInfo.id, yearId)
      .subscribe((vehicleDetails: any) => {
        this.vehiclePrice = vehicleDetails.preco
      })
  }

  navigateToDetails() {
    this.router.navigate([ApplicationRoutes.VEHICLE_DETAILS], {state: this.vehicleDetails})
  }

}
