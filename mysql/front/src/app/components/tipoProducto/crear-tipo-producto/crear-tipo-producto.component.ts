import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tipo_producto } from 'src/app/modelos/tipo_producto';
import { TioProductoService } from 'src/app/services/tio-producto.service';

@Component({
  selector: 'app-crear-tipo-producto',
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css']
})
export class CrearTipoProductoComponent implements OnInit{
  public form:FormGroup=this.formBuilder.group({
    nombre: ['', [Validators.required]],
  });


  constructor(
    private formBuilder: FormBuilder,
    private tioProductoService: TioProductoService,


    private router: Router,
  ) { }


  onSubmit(): void {
    const formValue: Tipo_producto = this.form.value;
    console.log(formValue);
    this.tioProductoService.createTipoProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/mostrarTipoProducto');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }



  
  cancel() {
    this.router.navigateByUrl('/mostrarTipoProducto');
  }

  get nombre() { return this.form.get('nombre'); }

  ngOnInit(): void {
  }


}
