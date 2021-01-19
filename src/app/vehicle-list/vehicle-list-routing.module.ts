import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationRoutes } from '../settings/routes/application-routes.helper';
import { VehicleListComponent } from './components/vehicle-list.component';


const routes: Routes = [
  {
    path: ApplicationRoutes.VEHICLE_LIST,
    component: VehicleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleListRoutingModule { }
