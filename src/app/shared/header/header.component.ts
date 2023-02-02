import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public loginservice : LoginService , private router: Router , public carritoservice:CarritoService , public usuarioservice :UsuarioService){
    loginservice.estado().subscribe(
      res=>{
        if(res){
          this.obtenerporRol(res?.uid);
        }else{
        }
      }
    )
  }

  logout(){
    this.loginservice.logout()
    .then(
      res=>{
        this.router.navigate(['/']);
      }
    )
    .catch(
      error=>{
        console.log(error);
      }
    )
  }

 async obtenerporRol(id:string){
    this.usuarioservice.obtenerRolporID(id).subscribe(
      res => {
      this.usuarioservice.rol = res.rol;
      localStorage.setItem('rol',JSON.stringify({'rol':res.rol}));
      }
    );
  }
}
