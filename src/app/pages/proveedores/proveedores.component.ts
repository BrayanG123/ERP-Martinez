import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {

  public proveedores: Proveedor[] = [];

  constructor( public _proveedorService: ProveedorService,  

  ) { }

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(){
    this._proveedorService.cargarProveedores()
        .subscribe( (proveedores:any) => {
          // console.log(proveedores);
          this.proveedores = proveedores;
        } ) 
  }

}
