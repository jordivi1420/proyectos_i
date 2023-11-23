import { Component,OnInit } from '@angular/core';
import { TioProductoService } from 'src/app/services/tio-producto.service';
import { Router } from '@angular/router';
import { Tipo_producto } from 'src/app/modelos/tipo_producto';
@Component({
  selector: 'app-mostrar-tipo-producto',
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrls: ['./mostrar-tipo-producto.component.css']
})
export class MostrarTipoProductoComponent  implements OnInit{
  public tipo_producto: Tipo_producto[] =[]
  public displayedColumns: string[] = ["id", "nombre"]
  constructor(
    private tipo_producto_Service: TioProductoService,
    private router: Router
  ) {

   }

   mostrarTipo_producto() {
    this.tipo_producto_Service.getAllTipo_producto()
      .subscribe((tipo_productos: Tipo_producto[]) => {
        this.tipo_producto = tipo_productos;
        console.log(this.tipo_producto);
      });
  }

   ngOnInit(): void {
    this.mostrarTipo_producto()
   }

}
