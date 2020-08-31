import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-productonuevo',
  templateUrl: './productonuevo.component.html',
  styles: []
})
export class ProductonuevoComponent implements OnInit {

  categorias: Categoria[] = [];
  producto: Producto = new Producto( null, '', '', '', '' );

  constructor( public _productoService: ProductoService,
               public _categoriaService: CategoriaService  
  ) { }

  ngOnInit(): void {
  }

  guardar( producto: Producto ){

    this.producto.category_id = producto.category_id;
    this.producto.nombre = producto.nombre;
    this.producto.descripcion = producto.descripcion;
    this.producto.precio = producto.precio;
    this.producto.costo = producto.costo;
    
    console.log('producto.ts: ', this.producto);

    this._productoService.crearProducto( this.producto )
        .subscribe( producto => {
          console.log(producto);
        } );
  }

  // cambioCategoria( id:string ){
  //   this._hospitalService.obtenerHospital( id )
  //           .subscribe( hospital => this.hospital = hospital );
  // }

}
