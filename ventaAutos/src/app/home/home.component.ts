import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../core/vehiculo';
import { VehiculosService } from '../home/vehiculos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listVehiculos: Array<Vehiculo> = [];
  Carro1 : number = 0;
  Carro2 : number = 0;
  Carro3 : number = 0;
  conteo: { [key: string]: number } = {};



  constructor(private vehiculoService : VehiculosService) { }

  getVehiculo(){    
      this.vehiculoService.getVehiculos().subscribe((listVehiculos) => { 
      this.listVehiculos = listVehiculos;
      this.calcularVehiculo ();    
    });           
  }

  calcularVehiculo (){
    
    this.Carro1 = this.listVehiculos.filter(carro => carro.marca === "Renault").length
    this.Carro2 = this.listVehiculos.filter(carro => carro.marca === "Chevrolet").length
    this.Carro3 = this.listVehiculos.filter(carro => carro.marca === "Nissan").length
  }

 

  ngOnInit() {
    this.getVehiculo();
  }

}
