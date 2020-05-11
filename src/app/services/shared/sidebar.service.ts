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
      titulo: 'Usuarios (hacer)',
      icono: 'fa fa-user nav-icon',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Usuarios', url: '/usuarios' },
      ]
    },
    {
      titulo: 'Compras (hacer)',
      icono: 'fa fa-shopping-cart nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Productos (hacer)',
      icono: 'fa fa-capsules nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Clientes (hacer)',
      icono: 'fa fa-handshake nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Empleados (hacer)',
      icono: 'fa fa-id-card-alt nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Proveedores (hacer)',
      icono: 'fa fa-truck-moving nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Ventas (hacer)',
      icono: 'fa fa-cash-register nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Reportes (hacer)',
      icono: 'fa fa-file-invoice-dollar nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },
    {
      titulo: 'Configuraciones (hacer)',
      icono: 'fa fa-wrench nav-icon',
      submenu: [
        { titulo: 'hacer', url: '/dashboard' },
        { titulo: 'hacer', url: '/dashboard' },
      ]
    },

  ];

  constructor() { }
}
