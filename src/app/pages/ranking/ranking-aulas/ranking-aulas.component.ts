import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classroom } from '../../../components/ranking/ranking.component';

@Component({
  selector: 'app-ranking-aulas',
  templateUrl: './ranking-aulas.component.html',
  styleUrls: ['./ranking-aulas.component.css']
})
export class RankingAulasComponent implements OnInit {
  classrooms: Classroom[] = [
    { id: 1, name: 'Aula 101', grade: '1°', section: 'A', teacherName: 'María García', totalStudents: 30, averageScore: 8.5, district: 'Distrito Central', level: 'Primaria' },
    { id: 2, name: 'Aula 102', grade: '1°', section: 'B', teacherName: 'Juan Pérez', totalStudents: 28, averageScore: 7.9, district: 'Distrito Central', level: 'Primaria' },
    { id: 3, name: 'Aula 201', grade: '2°', section: 'A', teacherName: 'Ana Martínez', totalStudents: 32, averageScore: 8.2, district: 'Distrito Central', level: 'Primaria' },
    { id: 4, name: 'Aula 202', grade: '2°', section: 'B', teacherName: 'Carlos Rodríguez', totalStudents: 29, averageScore: 8.7, district: 'Distrito Central', level: 'Primaria' },
    { id: 5, name: 'Aula 301', grade: '3°', section: 'A', teacherName: 'Laura Sánchez', totalStudents: 31, averageScore: 7.8, district: 'Distrito Central', level: 'Primaria' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Cualquier lógica de inicialización
  }

  viewClassroomDetails(classroomId: number): void {
    this.router.navigate(['/aula', classroomId]);
  }

  getScoreColor(score: number): string {
    if (score >= 9) return 'text-green-600';
    if (score >= 8) return 'text-blue-600';
    if (score >= 7) return 'text-yellow-600';
    return 'text-red-600';
  }
}