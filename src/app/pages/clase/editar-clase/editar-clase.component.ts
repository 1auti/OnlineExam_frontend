import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Clase {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: string;
  fecha: string;
}

@Component({
  selector: 'app-editar-clase',
  templateUrl: './editar-clase.component.html',
  styleUrls: ['./editar-clase.component.css']
})
export class EditarClaseComponent implements OnInit {
  claseForm: FormGroup;
  cursoId: number;
  claseId: number;

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
    this.claseId = 0;
  }

  ngOnInit(): void {
    this.cursoId = +this.route.snapshot.paramMap.get('id')!;
    this.claseId = +this.route.snapshot.paramMap.get('claseId')!;
    this.cargarDatosClase();
  }

  cargarDatosClase(): void {
    // Aquí normalmente harías una llamada a un servicio para obtener los datos de la clase
    // Por ahora, usaremos datos de ejemplo
    const claseEjemplo: Clase = {
      id: this.claseId,
      titulo: 'Clase de ejemplo',
      descripcion: 'Esta es una descripción de ejemplo para la clase',
      duracion: '1h 30min',
      fecha: '2024-01-15'
    };

    this.claseForm.patchValue(claseEjemplo);
  }

  onSubmit(): void {
    if (this.claseForm.valid) {
      console.log('Clase actualizada:', this.claseForm.value);
      // Aquí iría la lógica para actualizar la clase en el backend
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