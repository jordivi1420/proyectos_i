import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Crear Cliente',
            icon: 'pi pi-fw pi-users',
            routerLink: 'crearClientes/'
            
          },
          {
            label: 'Actualizar Cliente',
            icon: 'pi pi-fw pi-users',
          },
          {
            label: 'Mostrar Cliente',
            icon: 'pi pi-fw pi-users',
            routerLink: 'mostrarClientes/'
         },
          {
            label: 'Eliminar Cliente',
            icon: 'pi pi-fw pi-users',
          },

        ]
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/tipoProducto',
        items: [
          {
            label: 'Agregar un tipo de producto',
            routerLink: '/crearTipoProducto',
            icon: 'pi pi-fw pi-qrcode',
          },
          {
            label: 'Actualizar Producto',
            icon: 'pi pi-fw pi-qrcode',
          },
          {
            label: 'Mostrar Producto',
            routerLink: '/mostrarTipoProducto',
            icon: 'pi pi-fw pi-qrcode',
         },
          {
            label: 'Eliminar Producto',
            icon: 'pi pi-fw pi-qrcode',
          },

        ]
      },

      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/producto',
        items: [
          {
            label: 'Agregar un producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: '/crearProducto'
          },
          {
            label: 'Actualizar Producto',
            icon: 'pi pi-fw pi-qrcode',
          },
          {
            label: 'Mostrar Productos',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: '/mostrarProductos',
         },
          {
            label: 'Eliminar Producto',
            icon: 'pi pi-fw pi-qrcode',
          },

        ]

      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Agregar una venta',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/crearVenta',
          },
          {
            label: 'Actualizar Venta',
            icon: 'pi pi-fw pi-shopping-cart',
          },
          {
            label: 'Mostrar Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/mostrarVentaComponent'
         },
          {
            label: 'Eliminar Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
          },

        ]
      }

    ];
  }

}
