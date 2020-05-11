import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { PAGES_ROUTES } from './pages.routes';

// para los componentes compartidos
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        UsuariosComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
    ],
    exports: [
        DashboardComponent,
        UsuariosComponent
    ],
    
    
})
export class PagesModule {}