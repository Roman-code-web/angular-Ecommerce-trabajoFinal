import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudproductosComponent } from './pages/Admin/crudproductos/crudproductos.component';
import { CrudusuariosComponent } from './pages/Admin/crudusuarios/crudusuarios.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'productos', component:ProductosComponent},
  { path:'detalle/:id', component:DetalleComponent},
  { path:'pedidos', component:PedidosComponent},
  //--------
  {path:'dashboard', component: DashboardComponent,
  children:[
    { path:'crudproductos', component:CrudproductosComponent},
    { path:'crudusuarios', component:CrudusuariosComponent},
    
  ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
