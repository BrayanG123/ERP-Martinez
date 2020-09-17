export class Usuario {

    // El orden si importa, en parte, por los parametros opcionales
    constructor( 
                 public email:string,
                 public password:string,
                 public nombre?:string,
                 public img?:string,
                 public role?:string,
                 public _id?:string,
    ){
        
    }


}