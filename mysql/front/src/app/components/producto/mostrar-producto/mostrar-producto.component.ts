import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/modelos/productos';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css'],
})
export class MostrarProductoComponent implements OnInit {
  public producto: Productos[] = [];
  public displayedColumns: string[] = ["id", "nombre", "imagen", "precio","descripcion","categoria","descuento","envio","marca","precioVenta"];

  constructor(
    private productosService: ProductosService,
    private router:Router
  ) {
    // Supongamos que tienes una lista de productos que deseas mostrar en la tabla
  }

  mostrarProductos() {
    this.productosService.getAllProductos()
      .subscribe((productos: Productos[]) => {
        this.producto = productos;
        console.log(this.producto);
      });
  }

  ngOnInit(): void {
    this.mostrarProductos();
  }
  

}
