export interface IProduct {
    ID:number,
    ProductName:string,
	QuantityPerUnit?:number,
	UnitPrice:number,
	Image?: string,
	CategoryID?: number;
	NeedQuantity? : number;

}


