import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  public categorias: Categoria[] = [];

  constructor( public _categoriaService: CategoriaService
    
  ) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(){
    this._categoriaService.cargarCategorias()
        .subscribe( (categorias:any) => {
          // console.log(categorias);
          this.categorias = categorias;
        } ) 
  }

}
