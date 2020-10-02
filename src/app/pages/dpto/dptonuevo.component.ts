import { Component, OnInit } from '@angular/core';

import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-dptonuevo',
  templateUrl: './dptonuevo.component.html',
  styles: []
})
export class DptonuevoComponent implements OnInit {

  categoria: Categoria = new Categoria('', '');

  constructor( public _categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  guardar( categoria: Categoria ){
    

    this.categoria.nombre = categoria.nombre;
    this.categoria.descripcion = categoria.descripcion;
    

    this._categoriaService.crearCategoria( this.categoria )
        .subscribe( categoria => {
          // console.log(categoria);
        } );
  }

}
