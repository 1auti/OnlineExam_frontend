import { Component, OnInit } from '@angular/core';

interface Event {
  id: string;
  date: Date;
  type: 'class' | 'pdf' | 'exam';
  title: string;
  content?: string;
}

@Component({
  selector: 'app-course-calendar',
  templateUrl: './course-calendar.component.html',
  styleUrls: ['./course-calendar.component.css']
})
export class CourseCalendarComponent implements OnInit {
  currentMonth: Date = new Date();
  weekDays: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  calendarDays: Date[] = [];
  events: Event[] = [
    { id: '1', date: new Date(2024, 0, 15), type: 'class', title: 'Introducción a React', content: 'Aprende los fundamentos de React y la arquitectura basada en componentes.' },
    { id: '2', date: new Date(2024, 0, 20), type: 'pdf', title: 'Fundamentos de React', content: 'Una guía completa sobre los fundamentos de React.' },
    { id: '3', date: new Date(2024, 1, 5), type: 'exam', title: 'Cuestionario sobre React Básico', content: 'Evalúa tu conocimiento sobre los conceptos básicos de React.' },
    { id: '4', date: new Date(2024, 1, 10), type: 'class', title: 'Gestión de Estado en React', content: 'Explora diferentes técnicas de gestión de estado en React.' },
    { id: '5', date: new Date(2024, 1, 25), type: 'pdf', title: 'Patrones Avanzados de React', content: 'Aprende patrones avanzados y mejores prácticas de React.' },
  ];
  selectedTab: 'classes' | 'pdfs' | 'exams' = 'classes';
  selectedEvent: Event | null = null;

  ngOnInit() {
    this.generateCalendarDays();
  }

  generateCalendarDays() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(lastDay);
    if (endDate.getDay() !== 6) {
      endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    }

    this.calendarDays = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      this.calendarDays.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  prevMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendarDays();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendarDays();
  }

  isSameMonth(date: Date, monthDate: Date): boolean {
    return date.getMonth() === monthDate.getMonth() && date.getFullYear() === monthDate.getFullYear();
  }

  hasEvent(day: Date): boolean {
    return this.events.some(event => this.isSameDay(event.date, day));
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }

  selectDay(day: Date) {
    const event = this.events.find(e => this.isSameDay(e.date, day));
    if (event) {
      this.selectedEvent = event;
    }
  }

  closeEventModal() {
    this.selectedEvent = null;
  }

  selectTab(tab: 'classes' | 'pdfs' | 'exams') {
    this.selectedTab = tab;
  }

  getEventsByType(type: 'class' | 'pdf' | 'exam'): Event[] {
    return this.events.filter(event => event.type === type);
  }

  getEventTypeName(type: 'class' | 'pdf' | 'exam'): string {
    const typeNames = {
      'class': 'Clase',
      'pdf': 'PDF',
      'exam': 'Examen'
    };
    return typeNames[type];
  }
}