import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Inicio',
      icono: 'fa fa-home nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Usuarios (pendiente)',
      icono: 'fa fa-user nav-icon',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Usuarios', url: '/usuarios' },
      ]
    },
    
    {
      titulo: 'Compras',   //<------------------ AQUI
      icono: 'fa fa-shopping-cart nav-icon',
      submenu: [
        { titulo: 'compras', url: '/compras' },
        { titulo: 'nuevo', url: '/comprasnuevo' },
      ]
    },
    {
      titulo: 'Proveedores', //<------------------ AQUI
      icono: 'fa fa-truck-moving nav-icon',
      submenu: [
        { titulo: 'proveedores', url: '/proveedores' },
        { titulo: 'nuevo', url: '/proveedorcrear' },
      ]
    },
    {
      titulo: 'Categorias', //<------------------ AQUI
      icono: 'fa fa-truck-moving nav-icon',
      submenu: [
        { titulo: 'categorias', url: '/categorias' },
        { titulo: 'nuevo', url: '/categorianuevo' },
      ]
    },

    {
      titulo: 'Productos',
      icono: 'fa fa-capsules nav-icon',
      submenu: [
        { titulo: 'productos', url: '/producto' },
        { titulo: 'nuevo', url: '/productonuevo' },
      ]
    },
    {
      titulo: 'Clientes (pendiente)',
      icono: 'fa fa-handshake nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Empleados (pendiente)',
      icono: 'fa fa-id-card-alt nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Ventas (pendiente)',
      icono: 'fa fa-cash-register nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Reportes (pendiente)',
      icono: 'fa fa-file-invoice-dollar nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Config (pendiente)',
      icono: 'fa fa-wrench nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    // {
    //   titulo: 'Cerrar Sesion',
    //   icono: 'fa fa-wrench nav-icon',
    //   submenu: [
    //     { titulo: 'Logout', url: '/login' },
    //   ]
    // },

  ];

  constructor() { }
}
