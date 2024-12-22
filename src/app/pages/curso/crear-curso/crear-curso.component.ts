import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
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
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.cursoForm.valid) {
      console.log('Curso creado:', this.cursoForm.value);
      // Aquí iría la lógica para guardar el curso en el backend
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