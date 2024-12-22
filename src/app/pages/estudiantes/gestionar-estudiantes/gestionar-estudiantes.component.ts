import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  grado: string;
  promedio: number;
}

@Component({
  selector: 'app-gestionar-estudiantes',
  templateUrl: './gestionar-estudiantes.component.html',
  styleUrls: ['./gestionar-estudiantes.component.css']
})
export class GestionarEstudiantesComponent implements OnInit {
  aulaId: number;
  estudiantes: Estudiante[] = [];
  estudianteSeleccionado: Estudiante | null = null;
  modoEdicion: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.aulaId = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.aulaId = +params['id'];
      this.cargarEstudiantes();
    });
  }

  cargarEstudiantes() {
    // Aquí normalmente harías una llamada a un servicio para obtener los estudiantes
    this.estudiantes = [
      { id: 1, nombre: 'Ana', apellido: 'García', edad: 12, grado: '6to', promedio: 8.5 },
      { id: 2, nombre: 'Carlos', apellido: 'Rodríguez', edad: 11, grado: '6to', promedio: 7.8 },
      { id: 3, nombre: 'María', apellido: 'López', edad: 12, grado: '6to', promedio: 9.2 },
    ];
  }

  crearEstudiante() {
    this.estudianteSeleccionado = { id: 0, nombre: '', apellido: '', edad: 0, grado: '', promedio: 0 };
    this.modoEdicion = true;
  }

  editarEstudiante(estudiante: Estudiante) {
    this.estudianteSeleccionado = { ...estudiante };
    this.modoEdicion = true;
  }

  eliminarEstudiante(id: number) {
    // Aquí normalmente harías una llamada a un servicio para eliminar el estudiante
    this.estudiantes = this.estudiantes.filter(e => e.id !== id);
  }

  guardarEstudiante() {
    if (this.estudianteSeleccionado) {
      if (this.estudianteSeleccionado.id === 0) {
        // Crear nuevo estudiante
        const nuevoId = Math.max(...this.estudiantes.map(e => e.id)) + 1;
        this.estudiantes.push({ ...this.estudianteSeleccionado, id: nuevoId });
      } else {
        // Actualizar estudiante existente
        const index = this.estudiantes.findIndex(e => e.id === this.estudianteSeleccionado!.id);
        if (index !== -1) {
          this.estudiantes[index] = { ...this.estudianteSeleccionado };
        }
      }
      this.cancelarEdicion();
    }
  }

  cancelarEdicion() {
    this.estudianteSeleccionado = null;
    this.modoEdicion = false;
  }
}