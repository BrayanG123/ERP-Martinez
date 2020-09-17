import { Component, OnInit } from '@angular/core';
import { Comprasget } from 'src/app/models/compraget.model';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: []
})
export class ComprasComponent implements OnInit {

  public compras: Comprasget[] = []; 

  constructor( public _compraService: ComprasService ) { }

  ngOnInit(): void {
    this.cargarCompras();
  }

  cargarCompras(){
    this._compraService.cargarCompras()
          .subscribe( (compras:any) => {
              // console.log(compras);
              this.compras = compras;
          } );
  }

}
