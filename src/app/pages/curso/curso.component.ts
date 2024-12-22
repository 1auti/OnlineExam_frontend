import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Curso {
  id: number;
  nombre: string;
  profesor: string;
  categoria: string;
  progreso: number;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  [key: string]: string | number; // Add this line to allow string indexing
}

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {

  constructor(
    private router: Router
  ){

  }
    
  

  cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Introducción a la Programación',
      profesor: 'Dr. Ana García',
      categoria: 'Tecnología',
      progreso: 75,
      fechaInicio: '2024-01-15',
      fechaFin: '2024-05-30',
      descripcion: 'Aprende los fundamentos de la programación con Python.'
    },
    {
      id: 2,
      nombre: 'Historia del Arte Moderno',
      profesor: 'Lic. Carlos Rodríguez',
      categoria: 'Arte',
      progreso: 40,
      fechaInicio: '2024-02-01',
      fechaFin: '2024-06-15',
      descripcion: 'Explora los movimientos artísticos desde el siglo XIX hasta la actualidad.'
    },
    {
      id: 3,
      nombre: 'Estadística Aplicada',
      profesor: 'Dra. Laura Martínez',
      categoria: 'Matemáticas',
      progreso: 60,
      fechaInicio: '2024-03-01',
      fechaFin: '2024-07-15',
      descripcion: 'Aprende a aplicar métodos estadísticos en situaciones del mundo real.'
    },
    {
      id: 4,
      nombre: 'Inglés Avanzado',
      profesor: 'Prof. John Smith',
      categoria: 'Idiomas',
      progreso: 80,
      fechaInicio: '2024-01-10',
      fechaFin: '2024-05-20',
      descripcion: 'Perfecciona tu inglés con enfoque en conversación y escritura avanzada.'
    },
    {
      id: 5,
      nombre: 'Marketing Digital',
      profesor: 'Mg. Elena López',
      categoria: 'Negocios',
      progreso: 30,
      fechaInicio: '2024-04-01',
      fechaFin: '2024-08-15',
      descripcion: 'Aprende estrategias modernas de marketing para el mundo digital.'
    }
  ];

  categorias: string[] = ['Todas', 'Tecnología', 'Arte', 'Matemáticas', 'Idiomas', 'Negocios'];
  categoriaSeleccionada: string = 'Todas';
  terminoBusqueda: string = '';

  ngOnInit() {
    this.ordenarCursos('nombre');
  }

  filtrarCursos(): Curso[] {
    return this.cursos.filter(curso => 
      (this.categoriaSeleccionada === 'Todas' || curso.categoria === this.categoriaSeleccionada) &&
      (curso.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
       curso.profesor.toLowerCase().includes(this.terminoBusqueda.toLowerCase()))
    );
  }

  ordenarCursos(criterio: string) {
    this.cursos.sort((a, b) => {
      if (a[criterio] < b[criterio]) return -1;
      if (a[criterio] > b[criterio]) return 1;
      return 0;
    });
  }

  verDetalles(cursoId: number) {
    this.router.navigate(['/curso', cursoId]);
  }
    
}
