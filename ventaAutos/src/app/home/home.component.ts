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
  conteo: any;
  constructor(private vehiculoService : VehiculosService) { }

  getVehiculo(){
    this.vehiculoService.getVehiculos().subscribe((listVehiculos) => { this.listVehiculos = listVehiculos; });
    console.log(this.listVehiculos)    
  }

  calcularMarcas(){
    this.listVehiculos.forEach(elemento => {

    });
  }
  

  ngOnInit() {
    this.getVehiculo();
  }

}
