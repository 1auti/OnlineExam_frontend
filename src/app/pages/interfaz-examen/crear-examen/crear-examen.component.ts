import { Component } from '@angular/core';

interface Pregunta {
  tipo: 'multiple' | 'desarrollar' | 'verdaderoFalso';
  enunciado: string;
  opciones: string[];
  respuestaCorrecta: string;
}

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrl: './crear-examen.component.css'
})
export class CrearExamenComponent {
  profesor: string = '';
  clase: string = '';
  preguntas: Pregunta[] = [];
  nuevaPregunta: Pregunta = {
    tipo: 'multiple',
    enunciado: '',
    opciones: ['', '', '', ''],
    respuestaCorrecta: ''
  };

  agregarPregunta() {
    this.preguntas.push({ ...this.nuevaPregunta });
    this.resetNuevaPregunta();
  }

  eliminarPregunta(index: number) {
    this.preguntas.splice(index, 1);
  }

  guardarExamen() {
    const examen = {
      profesor: this.profesor,
      clase: this.clase,
      preguntas: this.preguntas
    };
    console.log('Examen guardado', examen);
  }

  resetNuevaPregunta() {
    this.nuevaPregunta = {
      tipo: 'multiple',
      enunciado: '',
      opciones: ['', '', '', ''],
      respuestaCorrecta: ''
    };
  }

}
