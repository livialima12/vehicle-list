import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationRoutes } from '../settings/routes/application-routes.helper';
import { VehicleListComponent } from './components/vehicle-list.component';
import { ListGuard } from './guards/list.guard';


const routes: Routes = [
  {
    path: ApplicationRoutes.VEHICLE_LIST,
    component: VehicleListComponent,
    canActivate: [ListGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleListRoutingModule { }
