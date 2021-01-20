import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    HeaderComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule {}