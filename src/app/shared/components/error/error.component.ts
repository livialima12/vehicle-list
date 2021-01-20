import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationRoutes } from 'src/app/settings/routes/application-routes.helper';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent  {

  constructor(
    private router: Router
  ){}

  redirect(){
    this.router.navigateByUrl(ApplicationRoutes.HOMEPAGE)
  }
}
