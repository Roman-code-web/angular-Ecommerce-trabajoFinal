import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoriasComponent } from './categorias/categorias.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { CardProductosComponent } from './card-productos/card-productos.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from '../pages/Admin/dashboard/dashboard.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';




@NgModule({
  declarations: [
    SliderComponent,
    CategoriasComponent,
    AnunciosComponent,
    CardProductosComponent,
    NavigationComponent,
    FormProductoComponent,
    TablaProductosComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    ReactiveFormsModule
  ],exports:[
    SliderComponent,
    AnunciosComponent,
    CategoriasComponent,
    CardProductosComponent,
    NavigationComponent,
    FormProductoComponent,
  ]
})
export class ComponentesModule { }
