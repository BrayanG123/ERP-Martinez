export class Compra {

    constructor (
        public provider_id: number,
        public deposit_id: number,
        public products: [
            {
                id: number,
                cantidad: number,
            }
        ],
        public _id?: string
    ) { }

}