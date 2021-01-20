import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { VehicleSearchComponent } from './vehicle-search.component';

describe('VehicleSearchComponent', () => {
  let component: VehicleSearchComponent;
  let fixture: ComponentFixture<VehicleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        BrowserAnimationsModule
      ],
      declarations: [ VehicleSearchComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate vehicle type selection and brand loading', () => {
    component.vehicleForm.setValue({vehicleType: 'carros'});
    expect(component.brandList).toBeDefined()
  })

  it('should validate form validity', () => {
    component.vehicleForm.setValue({vehicleType: 'motos'});
    component.searchForm.setValue({brandId: '', model: ''})
    expect(component.searchForm.valid).toBeTruthy
  })
});
