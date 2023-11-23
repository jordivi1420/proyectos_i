import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/clientes/`
  constructor(
    private http:HttpClient
  ) { }

  getAllClient(){
    return this.http
    .get<Cliente[]>(this.base_path)
  }
  createCliente(data: any): Observable<Cliente> {
    return this.http.post<Cliente>(this.base_path, data);
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.base_path}${id}`);
  }

}
