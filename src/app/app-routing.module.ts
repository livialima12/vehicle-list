import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationRoutes, ErrorRoutes } from './settings/routes/application-routes.helper';
import { ErrorComponent } from './shared/components/error/error.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/' + ApplicationRoutes.HOMEPAGE,
    pathMatch: 'full'
  },
  {
    path: ErrorRoutes.GENERIC_ERROR,
    component: ErrorComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
