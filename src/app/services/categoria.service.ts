import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/models/categoria.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public categorias: Categoria[] = [];//para el obtener categoria

  constructor( public http:HttpClient,
    
  ) { }

  //--------------------- GET ----------------------------
  cargarCategorias(){
    let url = URL_SERVICIOS + '/categories';
    
    return this.http.get( url );
  }


  //--------------------- POST -----------------------------
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

  //--------------------- PUT -----------------------------
  editarCategoria( categoria: Categoria ){
    // let url = URL_SERVICIOS + '/category' + `/${categoria._id}`;
    
    // return this.http.put( url, categoria );
          
  }

  //--------------------- DELETE -----------------------------
  borrarCategoria(){
    let url = URL_SERVICIOS + '/category';

    // return this.http.delete(url, )
  }

  

  // ObtenerCategoria(id:number){
  //   this.cargarCategorias()
  //       .subscribe((categorias:any) => {
  //         // console.log(categorias);
  //         this.categorias = categorias;

  //       } ) 

  //   return this.extraerCategoria( this.categorias, id );
  // }

  // extraerCategoria( categorias, id ){
  //   for (let i = 0; i < categorias.length; i++) {
  //     if ( id == categorias[i].id ) return categorias[i];
  //   }
  //   return null;
  // }

}
