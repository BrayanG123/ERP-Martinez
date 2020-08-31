import { Injectable } from '@angular/core';
import { Compra } from '../models/compras.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor( public http:HttpClient ) { }


  crearCompra( compra: Compra ){
    let url = URL_SERVICIOS + '/newPurchase';
    
    console.log('proveedor.servie: ', compra);
    return this.http.post( url, {
            'provider_id': compra.provider_id,
            'deposit_id': compra.deposit_id,
            'products': compra.products } )
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
