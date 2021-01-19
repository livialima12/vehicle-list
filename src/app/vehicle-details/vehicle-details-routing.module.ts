import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationRoutes } from '../settings/routes/application-routes.helper';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';


const routes: Routes = [
  {
    path: ApplicationRoutes.VEHICLE_DETAILS,
    component: VehicleDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleDetailsRoutingModule { }
