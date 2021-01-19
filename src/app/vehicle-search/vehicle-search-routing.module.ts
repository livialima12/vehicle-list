import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationRoutes } from '../settings/routes/application-routes.helper';
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component';


const routes: Routes = [
  {
    path: ApplicationRoutes.HOMEPAGE,
    component: VehicleSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleSearchRoutingModule { }
