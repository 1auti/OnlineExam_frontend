import { Component } from '@angular/core';
import { School } from '../../../components/ranking/ranking.component';

@Component({
  selector: 'app-ranking-colegios',
  templateUrl: './ranking-colegios.component.html',
  styleUrls: ['./ranking-colegios.component.css']  // Nota: Corregido 'styleUrl' a 'styleUrls'
})
export class RankingColegiosComponent {
  readonly schoolsData: School[] = [
    {
      id: 1,
      name: "Colegio San Juan",
      averageScore: 16.8,
      totalStudents: 1200,
      district: "San Isidro",
      level: "Secundaria"
    },
    // ... más colegios
  ];
}
