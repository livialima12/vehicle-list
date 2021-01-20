import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { VehicleListService } from 'src/app/shared/services/vehicle-list.service';

import { VehicleListComponent } from './vehicle-list.component';

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: {
        state:{
          data: {
            brandId: '1234',
            model: 'palio'
          }
        }
      }
    }
  }
}
 
describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let vehicleService: VehicleListService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule, 
        RouterTestingModule
      ],
      declarations: [ VehicleListComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        VehicleListService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    vehicleService = TestBed.get(VehicleListService);
    spyOn(vehicleService, 'getModelList').and.callFake(() => {})
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
  });
  
  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
