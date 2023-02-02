import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 
  constructor( private firestore:Firestore ) { }
  //funciones
  agregarUsuario({id, email, photoURL,rol}:any){
    const usuarioRef = doc(this.firestore, 'usuarios', id);
    return setDoc(usuarioRef, {id, email, photoURL,rol});
  }
  obtenerUsuario():Observable<Usuario[]>{
    const usuarioRef = collection(this.firestore, 'usuarios')
    return collectionData(usuarioRef, {idField:'id'}) as Observable<Usuario[]>;
  }
  eliminarUsuario( usuario : Usuario){
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`)
    return deleteDoc(usuarioRef);
  } 
}
