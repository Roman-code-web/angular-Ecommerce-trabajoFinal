import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CrudproductosComponent } from './Admin/crudproductos/crudproductos.component';
import { CrudusuariosComponent } from './Admin/crudusuarios/crudusuarios.component';






@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    DetalleComponent,
    PedidosComponent,
    DashboardComponent,
    CrudproductosComponent,
    CrudusuariosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    SharedModule,
  ],exports:[
    InicioComponent,
    ProductosComponent,
    DetalleComponent,
    PedidosComponent,
    DashboardComponent,
    CrudproductosComponent,
    CrudusuariosComponent
  ]
})
export class PagesModule { }
