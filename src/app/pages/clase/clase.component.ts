import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Clase {
  id: number;
  titulo: string;
  profesor: string;
  duracion: string;
  descripcion: string;
  contenido: string;
  recursos: Recurso[];
  fechaClase: Date;
  estado: 'programada' | 'en-curso' | 'finalizada';
}

interface Recurso {
  id: number;
  nombre: string;
  tipo: 'pdf' | 'video' | 'link';
  url: string;
}


@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrl: './clase.component.css'
})
export class ClaseComponent implements OnInit {

  claseId: number = 0;
  clase?: Clase;
  loading: boolean = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.claseId = +params['id'];
      this.cargarClase();
    });
  }

  cargarClase() {
    // Simulamos la carga de datos
    setTimeout(() => {
      try {
        // Aquí normalmente harías una llamada a un servicio
        this.clase = {
          id: this.claseId,
          titulo: 'Introducción a la Programación',
          profesor: 'Dr. Juan Pérez',
          duracion: '1 hora 30 minutos',
          descripcion: 'Clase introductoria sobre conceptos básicos de programación',
          contenido: 'En esta clase abordaremos los siguientes temas: Variables, Tipos de datos, Estructuras de control...',
          recursos: [
            { id: 1, nombre: 'Presentación de la clase', tipo: 'pdf', url: '/assets/presentacion.pdf' },
            { id: 2, nombre: 'Video explicativo', tipo: 'video', url: '/assets/video.mp4' },
            { id: 3, nombre: 'Documentación adicional', tipo: 'link', url: 'https://docs.example.com' }
          ],
          fechaClase: new Date('2024-03-15T10:00:00'),
          estado: 'programada'
        };
        this.loading = false;
      } catch (e) {
        this.error = 'Error al cargar la información de la clase';
        this.loading = false;
      }
    }, 1500); // Simulamos un tiempo de carga
  }

  getEstadoClase(estado: string): { texto: string; color: string } {
    const estados = {
      'programada': { texto: 'Programada', color: 'bg-yellow-100 text-yellow-800' },
      'en-curso': { texto: 'En curso', color: 'bg-green-100 text-green-800' },
      'finalizada': { texto: 'Finalizada', color: 'bg-gray-100 text-gray-800' }
    };
    return estados[estado as keyof typeof estados];
  }

  getIconoRecurso(tipo: string): string {
    const iconos = {
      'pdf': 'fa-file-pdf',
      'video': 'fa-video',
      'link': 'fa-link'
    };
    return iconos[tipo as keyof typeof iconos];
  }

  volverAtras() {
    this.router.navigate(['/cursos']);
  }
}


