import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductosComponent } from './componentes/card-productos/card-productos.component';
import { FormProductoComponent } from './componentes/form-producto/form-producto.component';
import { TablaProductosComponent } from './componentes/tabla-productos/tabla-productos.component';
import { LoginGuard } from './guard/login/login.guard';
import { PagarGuard } from './guard/pagar/pagar.guard';
import { PedidosGuard } from './guard/pedidos/pedidos.guard';
import { CrudproductosComponent } from './pages/Admin/crudproductos/crudproductos.component';
import { CrudusuariosComponent } from './pages/Admin/crudusuarios/crudusuarios.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { PagoComponent } from './pages/pago/pago.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'login', component:LoginComponent, canActivate:[LoginGuard]},
  { path:'registrar', component:RegistrarComponent, canActivate:[LoginGuard]},
  { path:'productos', component:ProductosComponent,
    children:[
      {path:'', component:CardProductosComponent},
      { path:'detalle/:id', component:DetalleComponent},
    ]
  },
  {path:'pagar', component:PagoComponent, canActivate:[PagarGuard]},
  { path:'pedidos', component:PedidosComponent, canActivate:[PedidosGuard]},
  //--------
  {path:'dashboard', component: DashboardComponent,
    children:[
      { path:'productos', component:CrudproductosComponent,
      children:[
        {path:'', component:TablaProductosComponent},
        { path:'nuevoProducto', component:FormProductoComponent},
      ]
      },
      { path:'usuarios', component:CrudusuariosComponent},
      
    ]},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
