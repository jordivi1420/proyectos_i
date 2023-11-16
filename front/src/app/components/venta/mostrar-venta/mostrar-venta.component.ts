import { Component , OnInit} from '@angular/core';
import { Venta } from 'src/app/modelos/ventas';
import { Router } from '@angular/router';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-mostrar-ventas',
  templateUrl: './mostrar-venta.component.html',
  styleUrls: ['./mostrar-venta.component.css']
})
export class MostrarVentaComponent implements OnInit {
  public ventas: Venta[]=[]
  public displayedColumns: string[] = ["id", " fecha", "descuento", " total", "subtotal", "updated", "cliente"]
  constructor(
    private ventasService: VentasService, 
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.mostrarVentas();
  }

  mostrarVentas(){
    this.ventasService.getAllVenta()
      .subscribe((ventas: Venta[]) => {
        this.ventas = ventas;
        console.log(this.ventas);
      });
  }

}