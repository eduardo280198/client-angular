import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

//Pantallas
import { DemoComponent } from './Componentes/demo/demo.component';
import { IndexComponent } from './Componentes/index/index.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ProductsComponent } from './Componentes/products/products.component';
import { ProvidersComponent } from './Componentes/providers/providers.component';
import { UsersComponent } from './Componentes/users/users.component';
import { ErrorComponent } from './Componentes/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    IndexComponent,
    LoginComponent,
    ProductsComponent,
    ProvidersComponent,
    UsersComponent,
    ErrorComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
