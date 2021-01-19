import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VehicleDetailsRoutingModule } from './vehicle-details/vehicle-details-routing.module';
import { VehicleDetailsModule } from './vehicle-details/vehicle-details.module';
import { VehicleListRoutingModule } from './vehicle-list/vehicle-list-routing.module';
import { VehicleListModule } from './vehicle-list/vehicle-list.module';
import { VehicleSearchRoutingModule } from './vehicle-search/vehicle-search-routing.module';
import { VehicleSearchModule } from './vehicle-search/vehicle-search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VehicleListRoutingModule,
    VehicleListModule,
    SharedModule,
    VehicleDetailsRoutingModule,
    VehicleDetailsModule,
    HttpClientModule,
    VehicleSearchModule,
    VehicleSearchRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
