import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Aula {
  id: number;
  nombre: string;
  capacidad: number;
  nivel: string;
}

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {
  colegioId: number;
  aulas: Aula[] = [
    { id: 1, nombre: 'Aula 101', capacidad: 30, nivel: 'Primaria' },
    { id: 2, nombre: 'Aula 102', capacidad: 25, nivel: 'Primaria' },
    { id: 3, nombre: 'Laboratorio de Ciencias', capacidad: 20, nivel: 'Secundaria' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.colegioId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.colegioId = +params['id'];
      // Aquí podrías cargar las aulas específicas del colegio
    });
  }

  verEstudiantes(aulaId: number): void {
    this.router.navigate(['/colegios', this.colegioId, 'aulas', aulaId, 'estudiantes']);
  }

  gestionarEstudiantes(aulaId: number): void {
    this.router.navigate(['/colegios', this.colegioId, 'aulas', aulaId, 'gestionar-estudiantes']);
  }

  verRankingAula(aulaId:number):void{
    this.router.navigate(['/ranking/aula',aulaId]);
  }
}