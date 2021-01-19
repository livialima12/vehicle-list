import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationRoutes } from './settings/routes/application-routes.helper';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/' + ApplicationRoutes.HOMEPAGE,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
