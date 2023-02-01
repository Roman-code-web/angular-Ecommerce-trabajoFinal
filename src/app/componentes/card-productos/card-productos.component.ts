import { Component, OnInit } from '@angular/core';

import { ProductoService } from 'src/app/servicios/productos/producto.service';

@Component({
  selector: 'app-card-productos',
  templateUrl: './card-productos.component.html',
  styleUrls: ['./card-productos.component.css']
})
export class CardProductosComponent implements OnInit {

  listaProductos:any=[];
  constructor(private productoservice:ProductoService){}

  ngOnInit(): void {
    this.getProductos();
  }
  async getProductos(){
    try {
      this.productoservice.obtenerProducto().subscribe(
        res=>{
          this.listaProductos = res ;
        },
        error=>{
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
   
  }
  agregarACarrito(){
    
  }
}
