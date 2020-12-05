import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componenet/Layout/header/header.component';
import { NotFoundComponent } from './Componenet/Not_Found/not-found/not-found.component';
import { CustomDirectiveDirective } from './Directives/custom-directive.directive';
import { ProductComponent } from './Componenet/product/product.component';
import { NewProductComponent } from './Componenet/new-product/new-product.component';
import { EditProductComponent } from './Componenet/edit-product/edit-product.component';
import { DetailsProductComponent } from './Componenet/details-product/details-product.component';
import { CategoryComponent } from './Componenet/category/category.component';
import { CategoryListComponent } from './Componenet/category-list/category-list.component';
import { HomeComponent } from './Componenet/home/home.component';
import { FilterPipe } from './Pipe/filter.pipe';
import { LogginComponent } from './Componenet/User/loggin/loggin.component';
import { RegistrationComponent } from './Componenet/User/registration/registration.component';
import { AddToCartComponent } from './Componenet/add-to-cart/add-to-cart.component';
import { OrderComponent } from './Componenet/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomDirectiveDirective,
    NotFoundComponent,
    ProductComponent,
    NewProductComponent,
    EditProductComponent,
    DetailsProductComponent,
    CategoryComponent,
    CategoryListComponent,
    HomeComponent,
    FilterPipe,
    LogginComponent,
    RegistrationComponent,
    AddToCartComponent,
    OrderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
