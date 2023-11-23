import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/productos/`
  
  constructor(
    private http: HttpClient
  ) { }

  getAllProductos(){
    return this.http
    .get<Productos[]>(this.base_path)
  }

  createProducto(data: any): Observable<Productos> {
    return this.http.post<Productos>(this.base_path, data);
  }


}
