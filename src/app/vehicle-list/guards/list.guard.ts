import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { VehicleListService } from 'src/app/shared/services/vehicle-list.service';

@Injectable({
  providedIn: 'root'
})
export class ListGuard implements CanActivate {
  constructor(
    private vehicleService: VehicleListService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if(!this.vehicleService.hasData){
      this.router.navigateByUrl('');
      return false
    }
    return true
  }
}