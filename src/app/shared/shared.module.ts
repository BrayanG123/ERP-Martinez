import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// mis componentes
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';




@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
})
export class SharedModule {}