import { Component , OnInit} from '@angular/core';
import { Venta } from 'src/app/modelos/ventas';
import { VentasService } from 'src/app/services/ventas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
@Component({
  selector: 'app-crear-ventas',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit{

  public form: FormGroup = this.formBuilder.group({
    fecha: ['', [Validators.required]],
    descuento: ['', [Validators.required]],
    total: ['', [Validators.required]],
    subtotal: ['', [Validators.required]],
    updated: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private ventaService: VentasService,
    private messageService: MessageService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const formValue: Venta= this.form.value;
    console.log(formValue);
    this.ventaService.createVenta(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'Venta Creada', life: 5000 });


        }, 0);
        this.router.navigateByUrl('ventas');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/ventas');
  }
  get fecha() { return this.form.get('fecha'); }
  get descuento() { return this.form.get('descuento'); }
  get total() { return this.form.get('total'); }
  get subtotal() { return this.form.get('subtotal'); }
  get updated() { return this.form.get('updated'); }

}