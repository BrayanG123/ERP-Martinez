import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { PAGES_ROUTES } from './pages.routes';

// para los componentes compartidos
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ComprasComponent } from './compras/compras.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProveedorcrearComponent } from './proveedores/proveedorcrear.component';
import { ComprasnuevoComponent } from './compras/comprasnuevo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategorianuevoComponent } from './categoria/categorianuevo.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductonuevoComponent } from './producto/productonuevo.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        UsuariosComponent,
        ProfileComponent,
        ComprasComponent,
        ProveedoresComponent,
        ProveedorcrearComponent,
        ComprasnuevoComponent,
        CategoriaComponent,
        CategorianuevoComponent,
        ProductoComponent,
        ProductonuevoComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,

        CommonModule,  //Para los ngFor, NngIf
        FormsModule,  //Para la caja de bananas
        ReactiveFormsModule,
    ],
    exports: [
        DashboardComponent,
        UsuariosComponent
    ],
    
    
})
export class PagesModule {}