/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculosService } from './vehiculos.service';
import {HttpClientModule} from '@angular/common/http';


describe('Service: Vehiculos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientTestingModule],
      providers: [VehiculosService]
    });
  });

  it('should ...', inject([VehiculosService], (service: VehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
