import { Injectable } from '@angular/core';
import { IOrder } from '../Shared/iorder';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderFromAPIService {


  constructor(private httpClient: HttpClient ) { }

//Add New product
addOrder(order:IOrder){
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};
      
  return this.httpClient.post(`${environment.API_URL}/BuyOrder/BuyProducts`, order, httpOptions);
}

//Get all order of this user id loged
GetOrdersForUser():Observable<IOrder[]>
{
  const httpOptions = {headers: new HttpHeaders({
    //'Content-Type': 'application/json'
    'Authorization': 'my-auth-token'
      })};
      return this.httpClient.get<IOrder[]>(`${environment.API_URL}/Orders/GetOrders` ,httpOptions )

}


}
