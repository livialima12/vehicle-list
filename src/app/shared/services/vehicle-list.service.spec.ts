import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VehicleListService } from './vehicle-list.service';

describe('VehicleListService', () => {
  let service: VehicleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    

  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
