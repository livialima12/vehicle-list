import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationRoutes } from 'src/app/settings/routes/application-routes.helper';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent  {
  
  constructor(
    private router: Router
  ){}

  redirect(){
    this.router.navigateByUrl(ApplicationRoutes.HOMEPAGE)
  }

}
