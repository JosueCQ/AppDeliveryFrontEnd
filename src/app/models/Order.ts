export class Order {

    id: number = 0;
    price: number = 0;
    envio: number = 0;
    total: number = 0;
    status: string = '';
    destinationID: number = 0;
    creditCardID: number = 0;
    productID: number[] = [];
    quantity: number[] = [];
}