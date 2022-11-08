import { TestBed } from '@angular/core/testing';

import { ServiceMascotaService } from './service-mascota.service';

describe('ServiceMascotaService', () => {
  let service: ServiceMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
