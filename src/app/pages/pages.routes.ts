import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ComprasComponent } from './compras/compras.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorcrearComponent } from './proveedores/proveedorcrear.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategorianuevoComponent } from './categoria/categorianuevo.component';
import { ComprasnuevoComponent } from './compras/comprasnuevo.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductonuevoComponent } from './producto/productonuevo.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'compras', component: ComprasComponent },
            { path: 'producto', component: ProductoComponent },
            { path: 'productonuevo', component: ProductonuevoComponent },
            { path: 'comprasnuevo', component: ComprasnuevoComponent },
            { path: 'proveedores', component: ProveedoresComponent },
            { path: 'proveedorcrear', component: ProveedorcrearComponent },
            { path: 'categorias', component: CategoriaComponent },
            { path: 'categorianuevo', component: CategorianuevoComponent },
            { path: 'profile', component: ProfileComponent },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );