import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../modelos/ventas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/ventas/`
  constructor(
    private http:HttpClient
  ) { }

  getAllVenta(){
    return this.http
    .get<Venta[]>(this.base_path)
  }

  createVenta(data: any): Observable<Venta> {
    return this.http.post<Venta>(this.base_path, data);
  }
}