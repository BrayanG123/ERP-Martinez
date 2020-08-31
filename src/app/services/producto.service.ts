import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( public http:HttpClient 
  
  ) { }

  cargarProductos(){
    let url = URL_SERVICIOS + '/products';
    
    return this.http.get( url );
  }

  crearProducto( producto: Producto ){
    let url = URL_SERVICIOS + '/product';
    
    console.log('producto.servie: ', producto);
    return this.http.post( url, {
            'category_id': producto.category_id,
            'nombre': producto.nombre,
            'descripcion': producto.descripcion,
            'precio': producto.precio, 
            'costo': producto.costo 
    } )
        .pipe( map((resp: any) => {
          console.log(resp);
        
        }));
  }


}
