import { Compraprod } from './compraprod.model';

export class Compra {

    constructor (
        public provider_id: number,
        public deposit_id: number,
        public productos: Compraprod[],
        public id?: Number,
        products?: string;
    ) { }

}