import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/models/categoria.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( public http:HttpClient,
    
  ) { }


  cargarCategorias(){
    let url = URL_SERVICIOS + '/categories';
    
    return this.http.get( url );
  }

  crearCategoria( categoria: Categoria ){
    let url = URL_SERVICIOS + '/category';
    
    // console.log('proveedor.servie: ', categoria);
    return this.http.post( url, {
            'nombre': categoria.nombre,
            'descripcion': categoria.descripcion})
        .pipe( map((resp: any) => {
          console.log(resp);
        }));
  }


}
