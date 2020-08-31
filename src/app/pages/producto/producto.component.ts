import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  public productos: Producto[] = [];

  constructor( public _productoService: ProductoService ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this._productoService.cargarProductos()
        .subscribe( (productos:any) => {
          // console.log(productos);
          this.productos = productos;
        } ) 
  }

}
