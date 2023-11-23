import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Productos } from 'src/app/modelos/productos';
import { ProductosService } from 'src/app/services/productos.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  public form:FormGroup=this.formBuilder.group({
    nombre: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    precioVenta: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    descuento: ['', [Validators.required]],
    envio: ['', [Validators.required]], 
    descripcion: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private  productosService: ProductosService,


    private router: Router,
  ) { }

  onSubmit(): void {
    const formValue: Productos = this.form.value;
    console.log(formValue);
    this.productosService.createProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/mostrarProductos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/mostrarProductos');
  }



  ngOnInit(): void {
  }


  
  get nombre() { return this.form.get('nombre'); }
  get categoria() { return this.form.get('categoria'); }
  get imagen() { return this.form.get('imagen'); }
  get precio() { return this.form.get('precio'); }
  get marca() { return this.form.get('marca'); }
  get descuento() { return this.form.get('descuento'); }
  get envio() { return this.form.get('envio'); }
  get precioVenta() { return this.form.get('precioVenta'); }
  get descripcion() { return this.form.get('descripcion'); }

}
