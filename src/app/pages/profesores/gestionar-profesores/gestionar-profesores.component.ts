import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Profesor {
  id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  email: string;
}

@Component({
  selector: 'app-gestionar-profesores',
  templateUrl: './gestionar-profesores.component.html',
  styleUrls: ['./gestionar-profesores.component.css']
})
export class GestionarProfesoresComponent implements OnInit {
  colegioId: number;
  profesores: Profesor[] = [];
  profesorSeleccionado: Profesor | null = null;
  modoEdicion: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.colegioId = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.colegioId = +params['id'];
      this.cargarProfesores();
    });
  }

  cargarProfesores() {
    // Aquí normalmente harías una llamada a un servicio para obtener los profesores
    this.profesores = [
      { id: 1, nombre: 'María', apellido: 'García', especialidad: 'Matemáticas', email: 'maria.garcia@escuela.edu' },
      { id: 2, nombre: 'Juan', apellido: 'Pérez', especialidad: 'Literatura', email: 'juan.perez@escuela.edu' },
      { id: 3, nombre: 'Ana', apellido: 'Martínez', especialidad: 'Ciencias', email: 'ana.martinez@escuela.edu' },
    ];
  }

  crearProfesor() {
    this.profesorSeleccionado = { id: 0, nombre: '', apellido: '', especialidad: '', email: '' };
    this.modoEdicion = true;
  }

  editarProfesor(profesor: Profesor) {
    this.profesorSeleccionado = { ...profesor };
    this.modoEdicion = true;
  }

  eliminarProfesor(id: number) {
    // Aquí normalmente harías una llamada a un servicio para eliminar el profesor
    this.profesores = this.profesores.filter(p => p.id !== id);
  }

  guardarProfesor() {
    if (this.profesorSeleccionado) {
      if (this.profesorSeleccionado.id === 0) {
        // Crear nuevo profesor
        const nuevoId = Math.max(...this.profesores.map(p => p.id)) + 1;
        this.profesores.push({ ...this.profesorSeleccionado, id: nuevoId });
      } else {
        // Actualizar profesor existente
        const index = this.profesores.findIndex(p => p.id === this.profesorSeleccionado!.id);
        if (index !== -1) {
          this.profesores[index] = { ...this.profesorSeleccionado };
        }
      }
      this.cancelarEdicion();
    }
  }

  cancelarEdicion() {
    this.profesorSeleccionado = null;
    this.modoEdicion = false;
  }
}