import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RankableItem } from '../../../components/ranking/ranking.component';


interface Student extends RankableItem {
  lastName: string;
  attendance: number;
}

@Component({
  selector: 'app-ranking-aula',
  templateUrl: './ranking-aula.component.html',
  styleUrls: ['./ranking-aula.component.css']
})
export class RankingAulaComponent implements OnInit {
  aulaId: number = 0;
  aulaInfo = {
    nombre: 'Aula 101',
    grado: '1°',
    seccion: 'A',
    profesor: 'María García'
  };
  
  students: Student[] = [
    { id: 1, name: 'Ana Martínez', lastName: 'Martínez', averageScore: 9.2, attendance: 98 },
    { id: 2, name: 'Carlos Gómez', lastName: 'Gómez', averageScore: 8.7, attendance: 95 },
    { id: 3, name: 'Laura Rodríguez', lastName: 'Rodríguez', averageScore: 9.5, attendance: 100 },
    { id: 4, name: 'Miguel Fernández', lastName: 'Fernández', averageScore: 7.8, attendance: 92 },
    { id: 5, name: 'Sofía López', lastName: 'López', averageScore: 8.9, attendance: 97 },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.aulaId = +params['id'];
      // Aquí normalmente cargarías la información del aula y los estudiantes desde un servicio
    });
  }

  getScoreColor(score: number): string {
    if (score >= 9) return 'text-green-600';
    if (score >= 8) return 'text-blue-600';
    if (score >= 7) return 'text-yellow-600';
    return 'text-red-600';
  }
}