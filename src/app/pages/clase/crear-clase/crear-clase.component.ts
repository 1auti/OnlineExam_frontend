import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {
  claseForm: FormGroup;
  cursoId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.claseForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      duracion: ['', [Validators.required, Validators.pattern(/^\d+h\s\d+min$/)]],
      fecha: ['', Validators.required]
    });
    this.cursoId = 0;
  }

  ngOnInit(): void {
    this.cursoId = +this.route.snapshot.paramMap.get('id')!;
  }

  onSubmit(): void {
    if (this.claseForm.valid) {
      console.log('Clase creada:', this.claseForm.value);
      // Aquí iría la lógica para guardar la clase en el backend
      this.router.navigate(['/curso', this.cursoId]);
    } else {
      Object.values(this.claseForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/curso', this.cursoId]);
  }
}