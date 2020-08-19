import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Pantallas
import { DemoComponent } from './Componentes/demo/demo.component';
import { IndexComponent } from './Componentes/index/index.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ProductsComponent } from './Componentes/products/products.component';
import { ProvidersComponent } from './Componentes/providers/providers.component';
import { UsersComponent } from './Componentes/users/users.component';
import { ErrorComponent } from './Componentes/error/error.component';

const appRouters = [
    {path: '', redirectTo: '/index', pathMatch:'full'},
    {path: 'index', component: IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'proveedores', component: ProvidersComponent},
    {path: 'usuario', component: UsersComponent},

    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouters)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}
