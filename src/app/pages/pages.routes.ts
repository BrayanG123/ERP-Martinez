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
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategeditarComponent } from './categoria/categeditar.component';
import { ProveeditComponent } from './proveedores/proveedit.component';
import { ProductoeditComponent } from './producto/productoedit.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { AlmacennuevoComponent } from './almacen/almacennuevo.component';
import { AlmaceneditComponent } from './almacen/almacenedit.component';
import { DptoComponent } from './dpto/dpto.component';
import { DptonuevoComponent } from './dpto/dptonuevo.component';




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
            { path: 'producto-edit/:id', component: ProductoeditComponent },

            { path: 'comprasnuevo', component: ComprasnuevoComponent },

            { path: 'proveedores', component: ProveedoresComponent },
            { path: 'proveedorcrear', component: ProveedorcrearComponent },
            { path: 'proveedit/:id', component: ProveeditComponent },

            { path: 'categorias', component: CategoriaComponent },
            { path: 'categorianuevo', component: CategorianuevoComponent },
            { path: 'categeditar/:id', component: CategeditarComponent },

            { path: 'almacenes', component: AlmacenComponent },
            { path: 'almacenes-nuevo', component: AlmacennuevoComponent },
            { path: 'almaceneditar/:id', component: AlmaceneditComponent },
            
            //modificando esto (devolver a como estaba despues) El original es dpto
            { path: 'dptos', component: DptoComponent },
            { path: 'dptos-nuevo', component: DptonuevoComponent },
            
            { path: 'profile', component: ProfileComponent },

            { path: 'account-settings', component: AccountSettingsComponent },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );