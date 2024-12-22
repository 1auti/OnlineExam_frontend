import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Colegio {
  id: number;
  nombre: string;
  direccion: string;
  tipo: string;
  anoFundacion: number;
  cantidadEstudiantes: number;
  descripcion: string;
  imagenUrl: string;
}

interface Aula {
  id: number;
  name: string;
  grade: string;
  section: string;
  teacherName: string;
  totalStudents: number;
  averageScore: number;
  district: string;
  level: string;
}

interface Estudiante {
  id: number;
  name: string;
  lastName: string;
  averageScore: number;
  attendance: number;
}

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {
  colegios: Colegio[] = [
    {
      id: 1,
      nombre: 'Colegio San Martín',
      direccion: 'Av. Libertador 1234, Buenos Aires',
      tipo: 'Secundario',
      anoFundacion: 1950,
      cantidadEstudiantes: 800,
      descripcion: 'Colegio con enfoque en ciencias y tecnología, ofreciendo una educación integral y de calidad.',
      imagenUrl: 'https://picsum.photos/seed/colegio1/400/300'
    },
    {
      id: 2,
      nombre: 'Escuela Belgrano',
      direccion: 'Calle Belgrano 567, Córdoba',
      tipo: 'Primario y Secundario',
      anoFundacion: 1925,
      cantidadEstudiantes: 1200,
      descripcion: 'Institución educativa con más de 95 años de trayectoria, destacada por su excelencia académica y valores.',
      imagenUrl: 'https://picsum.photos/seed/colegio2/400/300'
    },
    {
      id: 3,
      nombre: 'Instituto Técnico Roca',
      direccion: 'Av. Tecnología 789, Rosario',
      tipo: 'Secundario Técnico',
      anoFundacion: 1978,
      cantidadEstudiantes: 600,
      descripcion: 'Escuela técnica especializada en electrónica, informática y mecánica, preparando a los estudiantes para el mundo laboral.',
      imagenUrl: 'https://picsum.photos/seed/colegio3/400/300'
    },
  ];

  aulas: Aula[] = [
    { id: 1, name: 'Aula 101', grade: '1°', section: 'A', teacherName: 'María García', totalStudents: 30, averageScore: 8.5, district: 'Distrito Central', level: 'Primaria' },
    { id: 2, name: 'Aula 102', grade: '1°', section: 'B', teacherName: 'Juan Pérez', totalStudents: 28, averageScore: 7.9, district: 'Distrito Central', level: 'Primaria' },
    { id: 3, name: 'Aula 201', grade: '2°', section: 'A', teacherName: 'Ana Martínez', totalStudents: 32, averageScore: 8.2, district: 'Distrito Central', level: 'Primaria' },
    { id: 4, name: 'Aula 202', grade: '2°', section: 'B', teacherName: 'Carlos Rodríguez', totalStudents: 29, averageScore: 8.7, district: 'Distrito Central', level: 'Primaria' },
    { id: 5, name: 'Aula 301', grade: '3°', section: 'A', teacherName: 'Laura Sánchez', totalStudents: 31, averageScore: 7.8, district: 'Distrito Central', level: 'Primaria' },
  ];

  estudiantes: Estudiante[] = [
    { id: 1, name: 'Ana', lastName: 'Martínez', averageScore: 9.2, attendance: 98 },
    { id: 2, name: 'Carlos', lastName: 'Gómez', averageScore: 8.7, attendance: 95 },
    { id: 3, name: 'Laura', lastName: 'Rodríguez', averageScore: 9.5, attendance: 100 },
    { id: 4, name: 'Miguel', lastName: 'Fernández', averageScore: 7.8, attendance: 92 },
    { id: 5, name: 'Sofía', lastName: 'López', averageScore: 8.9, attendance: 97 },
  ];

  expandedColegioId: number | null = null;
  selectedTab: string = 'colegios';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setSelectedTab(tab: string): void {
    this.selectedTab = tab;
  }

  toggleColegioInfo(colegioId: number): void {
    this.expandedColegioId = this.expandedColegioId === colegioId ? null : colegioId;
  }

  verAulas(colegioId: number): void {
    this.router.navigate(['/colegios', colegioId, 'aulas']);
  }

  verProfesores(colegioId: number): void {
    this.router.navigate(['/colegios', colegioId, 'profesores']);
  }

  verRankingColegios(): void {
    this.router.navigate(['/ranking/colegio']);
  }

  verRankingAulas(): void {
    this.router.navigate(['/ranking/aulas']);
  }

  verRankingAula(aulaId: number): void {
    this.router.navigate(['/ranking/aula', aulaId]);
  }

  getScoreColor(score: number): string {
    if (score >= 9) return 'text-green-600';
    if (score >= 8) return 'text-blue-600';
    if (score >= 7) return 'text-yellow-600';
    return 'text-red-600';
  }
}