import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Pregunta {
  enunciado: string;
  tipo: 'multiple' | 'verdaderoFalso' | 'desarrollo';
  opciones?: string[];
}

interface Examen {
  titulo: string;
  estado: string;
  fechaInicio: Date;
  fechaFin: Date;
  duracion: number;
  intentosPermitidos: number;
  instrucciones: string;
  preguntas: Pregunta[];
}

@Component({
  selector: 'app-interfaz-examen',
  templateUrl: './interfaz-examen.component.html',
  styleUrl: './interfaz-examen.component.css'
})
export class InterfazExamenComponent implements OnInit {


  examen: Examen = {
    titulo: 'Examen de Matemáticas Avanzadas',
    estado: 'En progreso',
    fechaInicio: new Date('2023-05-15T10:00:00'),
    fechaFin: new Date('2023-05-15T12:00:00'),
    duracion: 120,
    intentosPermitidos: 1,
    instrucciones: 'Lee cuidadosamente cada pregunta. Tienes 120 minutos para completar el examen. Asegúrate de responder todas las preguntas antes de enviar.',
    preguntas: [
      {
        enunciado: '¿Cuál es la derivada de x^2?',
        tipo: 'multiple',
        opciones: ['x', '2x', '2', 'x^2']
      },
      {
        enunciado: 'El teorema fundamental del cálculo relaciona la derivación y la integración.',
        tipo: 'verdaderoFalso'
      },
      {
        enunciado: 'Explica el concepto de límite en cálculo.',
        tipo: 'desarrollo'
      },
      {
        enunciado: '¿Cuál es la integral de 2x?',
        tipo: 'multiple',
        opciones: ['x^2', 'x^2 + C', '2x^2', 'x^2 - C']
      },
      {
        enunciado: 'Describe el proceso para encontrar el máximo o mínimo de una función utilizando derivadas.',
        tipo: 'desarrollo'
      }
    ]
  };

  preguntaActual: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  irAPregunta(index: number): void {
    if (index >= 0 && index < this.examen.preguntas.length) {
      this.preguntaActual = index;
    }
  }

  siguientePregunta(): void {
    if (this.preguntaActual < this.examen.preguntas.length - 1) {
      this.preguntaActual++;
    }
  }

  preguntaAnterior(): void {
    if (this.preguntaActual > 0) {
      this.preguntaActual--;
    }
  }

  enviarExamen(): void {
    // Aquí iría la lógica para enviar el examen
    console.log('Examen enviado');
  }

 
}
