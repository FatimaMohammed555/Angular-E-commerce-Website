import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICustomer } from '../Shared/icustomer';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  customer:ICustomer;


  constructor(private httpClient: HttpClient
             ,private router: Router         
    ) { }

//Add user
registerUser(custm: ICustomer){
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // ,'Authorization': 'my-auth-token'
        })};
        
    return this.httpClient.post(`${environment.API_URL}/Account/postUser`, custm, httpOptions);
  }

//login user
loginUser(Name:string , Password:string){

  var data = "UserName="+Name +"&Password="+Password+"&grant_type=password";
  
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencouded'
    
    // ,'Authorization': 'my-auth-token'
      })};
      console.log(data);
  return this.httpClient.post(`${environment.API_URL}/token`, data, httpOptions);
}

Login(token)
{
   localStorage.setItem('UserToken',token);
}

isLogged(): boolean {
  if (localStorage.getItem('UserToken')) {
    return true ;
  }
  else {
    return false;
  }
}

logoutUser() {
  localStorage.removeItem('UserToken');
  localStorage.clear();
  alert("You are logout now , you must loggin to see all orders");
  this.router.navigate(['/Home'])
}


}
