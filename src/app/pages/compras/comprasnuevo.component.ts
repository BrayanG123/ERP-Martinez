import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compras.model';
import { ComprasService } from 'src/app/services/compras.service';


import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'; //Para el agregado de productos

@Component({
  selector: 'app-comprasnuevo',
  templateUrl: './comprasnuevo.component.html',
  styles: []
})
export class ComprasnuevoComponent implements OnInit {

  forma: FormGroup;
  // numero: number = 3;
  compra: Compra = new Compra( null, null, [ null ] );

  constructor( public _comprasService: ComprasService,
               private fb:FormBuilder  
  ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get productos(){
    return this.forma.get('productos') as FormArray;
  }

  guardarr( compra: Compra ){

    this.compra.provider_id = compra.provider_id;
    this.compra.deposit_id = compra.deposit_id;
    this.compra.products = compra.products;
    
    console.log('compras.ts: ', this.compra);

    this._comprasService.crearCompra( this.compra )
        .subscribe( compra => {
          console.log(compra);
        } );
  }

  agregarProducto(){  //<--- AQUIII
    this.productos.push( this.fb.control(  { id: null, cantidad: null } , Validators.required )
    );
  }

  borrarProducto(index: number){
    this.productos.removeAt( index );
  }

  guardar(){
    console.log(this.forma);
    // this.compra. = compra.;
    // this.compra. = compra.;
    // this.compra. = compra.;
    // this.compra. = compra.;
    // this.compra. = compra.;
    
    console.log('compra.ts: ', this.compra);

    // this._compraService.crearCompra( this.compra )
    //     .subscribe( compra => {
    //       console.log(compra);
    //     } );
  }

  crearFormulario(){
    this.forma = this.fb.group({
      idproveedor  : ['', [ Validators.required, Validators.minLength(5) ]],
      iddeposito: ['', [ Validators.required, Validators.minLength(5) ]],
      // direccion: this.fb.group({
      //   distrito: ['', Validators.required],
      //   ciudad: ['', Validators.required],
      // }),
      productos: this.fb.array([]),
      // productos: this.fb.group( {
      //   id: [null],
      //   cantidad: [null]
      // } ),
    });
  }

}
