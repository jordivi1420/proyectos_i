import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClientesComponent } from './components/cliente/crear-clientes/crear-clientes.component';
import { MostrarClientesComponent } from './components/cliente/mostrar-clientes/mostrar-clientes.component';
import { CrearVentaComponent } from './components/venta/crear-venta/crear-venta.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';

const routes: Routes = [
  {
    path: 'crearClientes',
    component: CrearClientesComponent
  },
  {
    path: 'mostrarClientes',
    component: MostrarClientesComponent
  },
  {
  path: 'crearVenta',
    component: CrearVentaComponent
  },
  {
  path: 'mostrarProductos',
    component: MostrarProductoComponent
  },
  {
    path: 'crearProducto',
    component:CrearProductoComponent
  },
  {
    path: 'mostrarTipoProducto',
    component: MostrarTipoProductoComponent
  },
  {
    path: 'crearTipoProducto',
    component: CrearTipoProductoComponent
  },
  {
  path: 'mostrarVentaComponent',
  component: MostrarVentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
