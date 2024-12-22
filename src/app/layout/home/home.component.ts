import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
    trigger('staggeredFadeIn', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('100ms', [
            animate('0.5s', style({ opacity: 1 })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  beneficios = [
    {
      titulo: 'Acceso 24/7',
      descripcion: 'Accede a tus cursos y materiales educativos en cualquier momento, desde cualquier lugar.',
      icon: 'fas fa-clock'
    },
    {
      titulo: 'Variedad de Cursos',
      descripcion: 'Ofrecemos una amplia gama de cursos en diferentes áreas del conocimiento.',
      icon: 'fas fa-book'
    },
    {
      titulo: 'Seguimiento de Progreso',
      descripcion: 'Monitorea tu rendimiento y mejora continuamente con nuestras herramientas de evaluación.',
      icon: 'fas fa-chart-line'
    }
  ];

  colegios = [
    {
      nombre: 'Colegio La Salle',
      descripcion: 'Una de las instituciones educativas más prestigiosas que utiliza nuestra plataforma para clases en línea y seguimiento de estudiantes.',
      imagen: 'https://picsum.photos/seed/colegio1/400/300'
    },
    {
      nombre: 'Escuela Técnica Nacional',
      descripcion: 'Una escuela técnica que está mejorando la formación profesional de sus estudiantes con cursos especializados.',
      imagen: 'https://picsum.photos/seed/colegio2/400/300'
    },
    {
      nombre: 'Instituto de Educación Superior',
      descripcion: 'Formando a futuros profesionales con acceso a contenido educativo de alta calidad a través de nuestra plataforma.',
      imagen: 'https://picsum.photos/seed/colegio3/400/300'
    }
  ];

  cursos = [
    {
      titulo: 'Curso de Programación',
      descripcion: 'Aprende los fundamentos de la programación con ejemplos prácticos.',
      enlace: '#'
    },
    {
      titulo: 'Curso de Matemáticas',
      descripcion: 'Refuerza tus conocimientos en álgebra, cálculo y geometría.',
      enlace: '#'
    },
    {
      titulo: 'Curso de Diseño Gráfico',
      descripcion: 'Desarrolla tus habilidades en diseño con herramientas profesionales.',
      enlace: '#'
    }
  ];

  testimonios = [
    {
      texto: '"Los cursos de Campus Virtual son muy completos y fáciles de seguir. ¡Me encantan!"',
      autor: 'Juan Pérez'
    },
    {
      texto: '"Excelente plataforma para aprender a mi propio ritmo. ¡La recomiendo al 100%!"',
      autor: 'María López'
    },
    {
      texto: '"Me ha permitido mejorar mis habilidades profesionales y conseguir un mejor empleo."',
      autor: 'Carlos Gómez'
    }
  ];

  irAColegios() {
    this.router.navigate(['/colegios']);
  }

  private setupIntersectionObserver() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.slide-up').forEach((el) => {
        observer.observe(el);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      document.querySelectorAll('.slide-up').forEach((el) => {
        el.classList.add('visible');
      });
    }
  }
}