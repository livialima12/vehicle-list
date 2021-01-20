import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VehicleCardComponent } from './vehicle-card.component';

describe('VehicleCardComponent', () => {
  let component: VehicleCardComponent;
  let fixture: ComponentFixture<VehicleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ VehicleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.cardInfo = {
      fipe_marca: "Fiat",
      fipe_name: "Palio 1.0 Celebr. ECONOMY F.Flex 8V 2p",
      id: "4825",
      key: "palio-4825",
      marca: "FIAT",
      name: "Palio 1.0 Celebr. ECONOMY F.Flex 8V 2p"
    }
    expect(component).toBeTruthy();
  });
});
