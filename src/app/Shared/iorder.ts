import { IProductDTO } from './iproduct-dto';

export interface IOrder {
    CustomerID:string,
    productList:IProductDTO[]

}
