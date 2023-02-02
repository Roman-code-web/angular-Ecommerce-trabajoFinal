import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/servicios/login/login.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private loginservice:LoginService,private usuarioservice: UsuarioService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const logeado=this.loginservice.islogeado();
      const rol=this.usuarioservice.rol;
      if(logeado && rol=='admin' ){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
     

  }
  
}
