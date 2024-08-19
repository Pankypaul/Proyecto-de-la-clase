import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  comuna:string = 'lo espejo';
  edad:number = 25;
  nombre:string ="Julian";
  arregloPersona: any =[
  {
    nombre: 'Jose',
    apellido: 'Muñoz',
    edad: 24 	


  }]

  datos : any = {
    id:1,
    dato: 'Programación'

  }

  constructor(private router:Router) { }

  ngOnInit() {
  }
  irPagina(){
    //crear el codigo dque quiera de la logica
    this.router.navigate(['/agregar']);

  }

}
