import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'productos', component:ProductosComponent},
  { path:'detalle/:id', component:DetalleComponent},
  { path:'pedidos', component:PedidosComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
