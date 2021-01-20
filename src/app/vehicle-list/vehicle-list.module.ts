import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { VehicleCardComponent } from './components/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from './components/vehicle-list.component';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCardModule
  ],
  declarations: [
    VehicleListComponent,
    VehicleCardComponent,
  ],
  exports: [

  ],
  entryComponents: [VehicleListComponent],
  providers: [
    
  ]
})
export class VehicleListModule {}