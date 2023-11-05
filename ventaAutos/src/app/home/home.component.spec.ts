/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { HomeComponent } from './home.component';
import { Vehiculo } from '../core/vehiculo';
import { HttpClientModule } from '@angular/common/http';
import { VehiculosService } from './vehiculos.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HomeComponent ],
      providers: [ VehiculosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    let vehiculos :Vehiculo;
 
    for(let i = 0; i < 3; i++) {
        vehiculos= new Vehiculo(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence())
      component.listVehiculos.push(vehiculos);
      console.log(vehiculos)
    }
    fixture.detectChanges();

  });

  it('Deberá crearse', () => {
    expect(component).toBeTruthy();
  });

  it('Deberá tener 3 lista de vehiculos  ', () => {
  const elementos = fixture.debugElement.queryAll(By.css('tr.tabla-vehiculos'));
  console.log(elementos.length)
  expect(elementos.length).toEqual(3)
  });


  
});
