import { Injectable } from '@angular/core';
import { ICategory } from '../Shared/icategory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryFromAPIService {

  CatList:ICategory[]=[];

  constructor(private httpClient: HttpClient) { }

//return all category from API
getAllCat():Observable<ICategory[]>
{
 return this.httpClient.get<ICategory[]>(`${environment.API_URL}/Categories/GetCategories`)
}

//Add New Category
addCategory(prd: ICategory){
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};
      
  return this.httpClient.post(`${environment.API_URL}/Categories/PostCategory`, prd, httpOptions);
}

//get Category by id
getCategoryById(catID: number): Observable <ICategory>{
  return this.httpClient.get<ICategory>(`${environment.API_URL}/Categories/GetCategory/${catID}`);
}

//delete Category by id 
deleteCategory(catid: number){
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};

  return this.httpClient.delete(`${environment.API_URL}/Categories/DeleteCategory/${catid}`, httpOptions);
}

//update Category
editCategory(catID:number , cat: ICategory): Observable <ICategory>
{
  const httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': 'my-auth-token'
      })};

  return this.httpClient.put<ICategory>(`${environment.API_URL}/Categories/PutCategory/${catID}`,cat, httpOptions);
}

}
