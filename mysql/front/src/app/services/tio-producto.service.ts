import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo_producto } from '../modelos/tipo_producto';
@Injectable({
  providedIn: 'root'
})
export class TioProductoService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/tipo_producto/`
  constructor(
    private http:HttpClient
  ) { }

  getAllTipo_producto(){
    return this.http
    .get<Tipo_producto[]>(this.base_path)
  }

  createTipoProducto(data: any): Observable<Tipo_producto> {
    return this.http.post<Tipo_producto>(this.base_path, data);
  }

}
