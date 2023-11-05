import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../core/vehiculo';

@Injectable({
    providedIn: 'root'
})
export class VehiculosService {

   private apiUrl = environment.baseUrl;
   
   constructor(private http: HttpClient) { }

   getVehiculos(): Observable<Vehiculo[]> {
    return  this.http.get<Vehiculo[]>(this.apiUrl);

  }

}
