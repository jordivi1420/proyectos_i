import { Component,OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit{
  public form:FormGroup=this.formBuilder.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    password: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: Cliente = this.form.value;
    console.log(formValue);
    this.clienteService.createCliente(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'cliente Creado', life: 5000 });


        }, 0);

        this.router.navigateByUrl('/mostrarClientes');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }



  cancel() {
    this.router.navigateByUrl('/mostrarClientes');
  }

  get nombre() { return this.form.get('nombreCliente'); }
  get direccion() { return this.form.get('direccionCliente'); }
  get telefono() { return this.form.get('telefonoCliente'); }
  get correo() { return this.form.get('correoCliente'); }
  get password() { return this.form.get('passwordCliente'); }



}
