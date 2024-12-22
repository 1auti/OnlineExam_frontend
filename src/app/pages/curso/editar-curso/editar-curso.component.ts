import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  nivel: string;
  categoria: string;
  precio: number;
  fechaInicio: string;
}

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  cursoForm: FormGroup;
  cursoId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cursoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      duracion: ['', [Validators.required, Validators.pattern(/^\d+\s(semanas|meses)$/)]],
      nivel: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      fechaInicio: ['', Validators.required]
    });
    this.cursoId = 0;
  }

  ngOnInit(): void {
    this.cursoId = +this.route.snapshot.paramMap.get('id')!;
    this.cargarDatosCurso();
  }

  cargarDatosCurso(): void {
    // Aquí normalmente harías una llamada a un servicio para obtener los datos del curso
    // Por ahora, usaremos datos de ejemplo
    const cursoEjemplo: Curso = {
      id: this.cursoId,
      titulo: 'Curso de ejemplo',
      descripcion: 'Esta es una descripción de ejemplo para el curso',
      duracion: '12 semanas',
      nivel: 'intermedio',
      categoria: 'Programación',
      precio: 99.99,
      fechaInicio: '2024-03-01'
    };

    this.cursoForm.patchValue(cursoEjemplo);
  }

  onSubmit(): void {
    if (this.cursoForm.valid) {
      console.log('Curso actualizado:', this.cursoForm.value);
      // Aquí iría la lógica para actualizar el curso en el backend
      this.router.navigate(['/cursos']);
    } else {
      Object.values(this.cursoForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/cursos']);
  }
}