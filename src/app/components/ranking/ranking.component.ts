import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

export interface RankableItem {
  id: number;
  name: string;
  averageScore: number;
}

export interface Student extends RankableItem {
  lastName: string;
  attendance: number;
}

export interface School extends RankableItem {
  totalStudents: number;
  district: string;
  level: string;
}

export interface Classroom extends RankableItem {
  grade: string;
  section: string;
  teacherName: string;
  totalStudents: number;
  averageScore: number;
  district: string; // Agregar estas propiedades
  level: string;
}

export interface RankingMetadata {
  total: number;
  highestScore: number;
  lowestScore: number;
  averageScore: number;
  additionalStats?: Record<string, number>;
}

export type RankingType = 'classroom' | 'school' | 'district';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class RankingComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() items: (Student | School | Classroom)[] = [];
  @Input() type: RankingType = 'classroom';
  @Input() showDetails: boolean = true;
  
  metadata: RankingMetadata = {
    total: 0,
    highestScore: 0,
    lowestScore: 0,
    averageScore: 0
  };

  sortedItems: (Student | School | Classroom)[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  ngOnInit() {
    this.calculateMetadata();
    this.sortItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.calculateMetadata();
      this.sortItems();
    }
  }

  private calculateMetadata(): void {
    const scores = this.items.map(item => item.averageScore);
    this.metadata = {
      total: this.items.length,
      highestScore: Math.max(...scores),
      lowestScore: Math.min(...scores),
      averageScore: scores.reduce((a, b) => a + b, 0) / scores.length,
      additionalStats: this.calculateAdditionalStats()
    };
  }

  private calculateAdditionalStats(): Record<string, number> {
    if (this.isSchoolOrClassroomRanking()) {
      const items = this.items as (School | Classroom)[];
      return {
        totalStudents: items.reduce((sum, item) => sum + item.totalStudents, 0)
      };
    }
    return {};
  }

  private sortItems(): void {
    this.sortedItems = [...this.items].sort((a, b) => b.averageScore - a.averageScore);
  }

  private isSchoolOrClassroomRanking(): boolean {
    return this.items.length > 0 && 'totalStudents' in this.items[0];
  }

  getMetadataLabel(key: string): string {
    switch (key) {
      case 'total':
        return this.isSchoolOrClassroomRanking() ? 'Total Aulas/Colegios' : 'Total Estudiantes';
      default:
        return key;
    }
  }

  getMedalColor(position: number): string {
    switch (position) {
      case 1: return 'bg-yellow-400';
      case 2: return 'bg-gray-300';
      case 3: return 'bg-amber-600';
      default: return 'bg-gray-100';
    }
  }
  
  getScoreColor(score: number): string {
    if (score >= 18) return 'text-green-600';
    if (score >= 14) return 'text-blue-600';
    if (score >= 11) return 'text-yellow-600';
    return 'text-red-600';
  }

  getItemDetails(item: Student | School | Classroom): string {
    if (this.isClassroom(item)) {
      return `${item.grade}° "${item.section}" - Prof. ${item.teacherName}`;
    } else if (this.isSchool(item)) {
      return `${item.level} - ${item.district}`;
    } else {
      switch (this.type) {
        case 'classroom':
          return `Asistencia: ${item.attendance}%`;
        case 'school':
          return `${item.lastName}`;
        case 'district':
          return item.lastName || '';
        default:
          return '';
      }
    }
  }

  private isClassroom(item: Student | School | Classroom): item is Classroom {
    return 'grade' in item && 'section' in item;
  }

  private isSchool(item: Student | School | Classroom): item is School {
    return 'totalStudents' in item && !('grade' in item);
  }

  trackById(index: number, item: RankableItem): number {
    return item.id;
  }

  get paginatedItems(): (Student | School | Classroom)[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.sortedItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.sortedItems.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}