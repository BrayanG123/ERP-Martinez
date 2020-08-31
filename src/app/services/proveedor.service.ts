import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from 'src/app/models/proveedor.model';



@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor( public http:HttpClient,
                 
  ) { }

  
  cargarProveedores(){
    let url = URL_SERVICIOS + '/providers';
    
    return this.http.get( url );
  }

  crearProveedor( proveedor: Proveedor ){
    let url = URL_SERVICIOS + '/provider';
    
    console.log('proveedor.servie: ', proveedor);
    return this.http.post( url, {
            'empresa': proveedor.empresa,
            'direccion': proveedor.direccion,
            'telefono': proveedor.telefono } )
        .pipe( map((resp: any) => {
          console.log(resp);
          // Swal.fire(
          //   'Creado!',
          //   medico.nombre,
          //   'success'
          // );
          // return resp.medico;
        }));
  }

}
