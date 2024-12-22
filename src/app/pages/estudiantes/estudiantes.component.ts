import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  @Input() aulaId: number | null = null;
  estudiantes: Estudiante[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (!this.aulaId) {
      this.route.params.subscribe(params => {
        this.aulaId = +params['id'];
        this.cargarEstudiantes();
      });
    } else {
      this.cargarEstudiantes();
    }
  }

  cargarEstudiantes() {
    // Aquí normalmente harías una llamada a un servicio para obtener los estudiantes del aula
    // Por ahora, usaremos datos de ejemplo
    this.estudiantes = [
      { id: 1, nombre: 'Ana', apellido: 'García', edad: 12, grado: '6to', promedio: 8.5 },
      { id: 2, nombre: 'Carlos', apellido: 'Rodríguez', edad: 11, grado: '6to', promedio: 7.8 },
      { id: 3, nombre: 'María', apellido: 'López', edad: 12, grado: '6to', promedio: 9.2 },
      { id: 4, nombre: 'Juan', apellido: 'Martínez', edad: 11, grado: '6to', promedio: 8.0 },
      { id: 5, nombre: 'Laura', apellido: 'Fernández', edad: 12, grado: '6to', promedio: 8.7 },
    ];
  }

  getPromedioColor(promedio: number): string {
    if (promedio >= 9) return 'text-green-600';
    if (promedio >= 7) return 'text-yellow-600';
    return 'text-red-600';
  }
}