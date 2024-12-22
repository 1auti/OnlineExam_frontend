import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Profesor {
  id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  email: string;
  experiencia: number;
}

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  colegioId: number;
  profesores: Profesor[] = [];
  profesorSeleccionado: Profesor | null = null;
  modoEdicion: boolean = false;
  modoVisualizacion: boolean = true;

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
      { id: 1, nombre: 'María', apellido: 'García', especialidad: 'Matemáticas', email: 'maria.garcia@escuela.edu', experiencia: 10 },
      { id: 2, nombre: 'Juan', apellido: 'Pérez', especialidad: 'Literatura', email: 'juan.perez@escuela.edu', experiencia: 8 },
      { id: 3, nombre: 'Ana', apellido: 'Martínez', especialidad: 'Ciencias', email: 'ana.martinez@escuela.edu', experiencia: 12 },
      { id: 4, nombre: 'Carlos', apellido: 'Rodríguez', especialidad: 'Informática', email: 'carlos.rodriguez@escuela.edu', experiencia: 6 },
      { id: 5, nombre: 'Laura', apellido: 'Sánchez', especialidad: 'Historia', email: 'laura.sanchez@escuela.edu', experiencia: 15 },
    ];
  }

  toggleModo() {
    this.modoVisualizacion = !this.modoVisualizacion;
  }

  crearProfesor() {
    this.profesorSeleccionado = { id: 0, nombre: '', apellido: '', especialidad: '', email: '', experiencia: 0 };
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