import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {


  usuario = {
    nombre: 'Juan Pérez',
    tipo: 'Estudiante',
    email: 'juan.perez@ejemplo.com',
    carrera: 'Ingeniería Informática'
  };

}
