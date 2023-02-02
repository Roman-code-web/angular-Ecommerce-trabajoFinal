import { Injectable } from '@angular/core';
import { Auth , authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { UsuarioService } from '../usuario/usuario.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario:any=[];
  logeado=false;
  constructor(private auth : Auth  ) {
   }
  //funcion registrar
  registrarUsuario({ email, password}:any){ 
    return createUserWithEmailAndPassword(this.auth,email,password);
  }
  //funcion login
  loginUsuario({ email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //login con google 
  loginGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  //funcion logout
  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('rol');
    return signOut(this.auth);
  }
  islogeado(){
    if(localStorage.getItem('user')){
      this.usuario=JSON.parse(String(localStorage.getItem('user')) );
      this.logeado=true;
      return true;
    }else{
      this.logeado=false;
      return false;
    }
  }
 
  estado(){
    return authState(this.auth);
  }
}
