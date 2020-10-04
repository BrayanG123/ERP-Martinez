import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Compra } from 'src/app/models/compras.model';
import { ComprasService } from 'src/app/services/compras.service';
// import { Compraprod } from 'src/app/models/compraprod.model';

@Component({
  selector: 'app-compraver',
  templateUrl: './compraver.component.html',
  styles: []
})
export class CompraverComponent implements OnInit {

  compra: Compra;
  public productos: [];
  id = 0;
  public cargando: boolean = true;

  constructor( private activatedRoute: ActivatedRoute,
               private _comprasService: ComprasService,
               private router:Router,
  ) { 
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.id = Number(params['id']);
    } );

    this._comprasService.cargarCompras()
          .subscribe( (compras: Compra[]) => {
            this.cargando = false;
            this.cargarData( compras );
          } )
  }

  ngOnInit(): void {
  }

  cargarData( compras:Compra[] ){
    
    
    for (let i = 0;  i < compras.length; i++) {
      if ( compras[i].id === this.id ){      //wtf? el programa corre bien
        // console.log('AQUI EL ID: ',compras[i].id);
        // console.log('AQUI EL thisID: ', this.id );
        this.compra = compras[i];
        console.log(this.compra);
        // this.productos = this.compra.products;
        
        break;
      }
    }

  }


}
