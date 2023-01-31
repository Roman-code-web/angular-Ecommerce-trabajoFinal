import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoriasComponent } from './categorias/categorias.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { CardProductosComponent } from './card-productos/card-productos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SliderComponent,
    CategoriasComponent,
    AnunciosComponent,
    CardProductosComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule
  ],exports:[
    SliderComponent,
    AnunciosComponent,
    CategoriasComponent,
    CardProductosComponent
  ]
})
export class ComponentesModule { }
