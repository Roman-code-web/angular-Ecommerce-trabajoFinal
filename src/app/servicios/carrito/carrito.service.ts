import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  listaItemCarritos:any=[]=[];
  constructor() {
    this.listaItemCarritos=JSON.parse(String(localStorage.getItem('carrito')));
  }


}
