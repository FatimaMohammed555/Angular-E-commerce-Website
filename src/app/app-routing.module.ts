import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './Componenet/Not_Found/not-found/not-found.component';
import { NewProductComponent } from './Componenet/new-product/new-product.component';
import { ProductComponent } from './Componenet/product/product.component';
import { EditProductComponent } from './Componenet/edit-product/edit-product.component';
import { DetailsProductComponent } from './Componenet/details-product/details-product.component';
import { CategoryComponent } from './Componenet/category/category.component';
import { HomeComponent } from './Componenet/home/home.component';
import { LogginComponent } from './Componenet/User/loggin/loggin.component';
import { RegistrationComponent } from './Componenet/User/registration/registration.component';
import { AddToCartComponent } from './Componenet/add-to-cart/add-to-cart.component';
import { AuthGuard } from './Componenet/User/auth.guard';
import { OrderComponent } from './Componenet/order/order.component';

const routes: Routes = [

{path:'' ,redirectTo:'/Home',pathMatch:'full'},
{path:'Home' , component:HomeComponent},
{path:'Product' , component:ProductComponent},
{path:'Category' , component:CategoryComponent},
{path:'Order' , component:OrderComponent},
{path:'NewProduct' , component:NewProductComponent},
{path:'Cart' , component:AddToCartComponent , canActivate: [AuthGuard]},
//{path:'Cart' , component:AddToCartComponent},
{path:'Loggin' , component:LogginComponent},
{path:'Register' , component:RegistrationComponent},
{path:'EditProduct/:pid' , component:EditProductComponent},
{path:'Product/:pid' , component:DetailsProductComponent},
{path:'**' , component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
