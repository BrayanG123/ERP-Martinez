import { RouterModule, Routes } from '@angular/router'
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
    
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NopagefoundComponent },
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );