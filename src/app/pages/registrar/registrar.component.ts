import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  formRegistrar!:FormGroup;
  constructor(private frmb: FormBuilder){
    this.formRegistrar=frmb.group({
      email:['',
      [Validators.required]
      ],
      password:['',
      [Validators.required]
      ] 
    });
  }
  registrar(){
    console.log(this.formRegistrar.value)
  }
}
