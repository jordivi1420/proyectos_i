import { Component,OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import {Message,MessageService} from 'primeng/api';
@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css'],
})
export class  MostrarClientesComponent implements OnInit {
  public clientes: Cliente[] = []
  public displayedColumns: string[] = ["id", "nombre", "direccion", "telefono","correo","password"]
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private messageService: MessageService
  ) {

   }

   mostrarEstudiante() {
    this.clienteService.getAllClient()
      .subscribe((cliente: Cliente[]) => {
        this.clientes = cliente;
        console.log(this.clientes);
      });
  }

  eliminar(id: number): void{
    this.router.navigateByUrl('/mostrarClientes');
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
        this.mostrarEstudiante();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/clientes');

      }
    );
  }





  ngOnInit(): void {
    this.mostrarEstudiante();
  }

  imprimir(id: number){

  }

}
