import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VehicleDetailsComponent
  ],
  exports: [

  ],
  entryComponents: [VehicleDetailsComponent],
  providers: [
    
  ]
})
export class VehicleDetailsModule {}