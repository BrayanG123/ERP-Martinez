import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario = new Usuario('','','','','','');
  token: string;

  constructor( public http: HttpClient,
               public router: Router
  ) { }


  login( usuario: Usuario ){
    let url = URL_SERVICIOS + '/login';

    return this.http.post( url, usuario )
                    .pipe( map( (resp:any) => {
                      // console.log("La respuestaaa: ", resp);
                      console.log(resp.role_id);
                      console.log(resp.role_name);
                      this.guardarStorage(resp.role_id, resp.access_token, resp.role_name);
                      console.log("exito en login");
                      console.log(resp);
                      return true;
                    } ), catchError( err => {
                      console.log("Catcherror ERrorrrrr");
                      console.log("Aqui el error:", err);
                      // return throwError( err );
                      return throwError(err);
                      }) 
                    )
  }

  guardarStorage( id:string, token:string, role:string ){
    localStorage.setItem('id', id );
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    console.log("guardarStorage: ",id);
    console.log("guardarStorage: ",role);
    this.usuario._id = id;
    this.usuario.role = role;
    this.token = token;
    console.log(this.usuario);
  }  

  estalogeado(){
    return ( this.token.length > 5 )? true: false;
  }

}