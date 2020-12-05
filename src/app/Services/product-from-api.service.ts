import { Injectable } from '@angular/core';
import { IProduct } from '../Shared/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductFromAPIService {

  prodList:IProduct[]=[];
  constructor(private httpClient: HttpClient ) { }

//return all product from API
getAllProds():Observable<IProduct[]>
{
 return this.httpClient.get<IProduct[]>(`${environment.API_URL}/Products/GetProducts`)
}


//Add New product
addProduct(prd: IProduct){
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};
      
  return this.httpClient.post(`${environment.API_URL}/Products/PostProduct`, prd, httpOptions);
}

//get product by id
getProductById(pID: number): Observable <IProduct>{
  return this.httpClient.get<IProduct>(`${environment.API_URL}/Products/GetProduct/${pID}`);
}

//get product by CatID
//Products/ProductByCatID?
getProductsByCatID(catID: number):Observable <IProduct[]>{
return this.httpClient.get<IProduct[]>(`${environment.API_URL}/GetProductByCatID/${catID}`);
}

//Products/ProductByCatID?
getProductsByPrice(minPrice: number , maxPrice:number):Observable <IProduct[]>{
  return this.httpClient.get<IProduct[]>(`${environment.API_URL}/SearchByPrice?min=${minPrice}&max=${maxPrice}`);
  }

//GetProductByCatID

//delete product 
deleteProd(pid: number){
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};

  return this.httpClient.delete(`${environment.API_URL}/Products/DeleteProduct/${pid}`, httpOptions);
}

//update product
editProduct(pID:number , prd: IProduct): Observable <IProduct>
{
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};

  return this.httpClient.put<IProduct>(`${environment.API_URL}/Products/PutProduct/${pID}`,prd, httpOptions);
}



}
