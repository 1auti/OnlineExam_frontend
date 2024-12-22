  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';

  interface Curso {
    id: number;
    nombre: string;
    profesor: string;
    categoria: string;
    progreso: number;
    fechaInicio: string;
    fechaFin: string;
    descripcion: string;
    [key: string]: string | number;
  }

  interface Event {
    id: string;
    date: Date;
    type: 'class' | 'pdf' | 'exam';
    title: string;
    content?: string;
    courseId: number;
    size?: string;
    duration?: string;
  }

  interface Examen {
    id: number;
    titulo: string;
    descripcion: string;
    disponible: boolean;
  }

  interface Clase {
    id: number;
    titulo: string;
    descripcion: string;
    duracion: string;
  }

  @Component({
    selector: 'app-materia',
    templateUrl: './materia.component.html',
    styleUrls: ['./materia.component.css']
  })
  export class MateriaComponent implements OnInit {
    curso!: Curso;
    currentMonth: Date = new Date();
    weekDays: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    calendarDays: Date[] = [];
    selectedTab: string = 'pdfs';
    loading: boolean = true;
    error: string = '';
    selectedEvent: Event | null = null;
    tieneRolAutorizado: boolean = false;
    events: Event[] = [];
    cursoId!:number;

    examenes: Examen[] = [
      { id: 1, titulo: 'Examen de Matemáticas', descripcion: 'Álgebra y geometría', disponible: true },
      { id: 2, titulo: 'Examen de Historia', descripcion: 'Historia mundial del siglo XX', disponible: true },
      { id: 3, titulo: 'Examen de Ciencias', descripcion: 'Biología y química', disponible: false },
    ];

    clases: Clase[] = [
      { id: 1, titulo: 'Clase 1: Introducción', descripcion: 'Fundamentos básicos de programación', duracion: '2h' },
      { id: 2, titulo: 'Clase 2: Variables y Tipos', descripcion: 'Uso de variables y tipos de datos', duracion: '1.5h' },
    ];

    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {
      
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.cursoId = +params['id'];
        this.loadCourseData(this.cursoId);
      });
      this.generateCalendarDays();
      this.verificarRolUsuario();
    }

    verificarRolUsuario() {
      // Aquí deberías implementar la lógica real para verificar el rol del usuario
      // Por ahora, lo simularemos con un valor hardcodeado
      this.tieneRolAutorizado = true; // Cambiar a false para simular un usuario sin autorización
    }

    crearExamen() {
      // Implementar lógica para crear un nuevo examen
      console.log('Crear nuevo examen');
      // Aquí podrías navegar a un componente de creación de examen o abrir un modal
    }

    editarExamen(examenId: number) {
      // Implementar lógica para editar un examen existente
      console.log('Editar examen', examenId);
      // Aquí podrías navegar a un componente de edición de examen o abrir un modal
    }

    eliminarExamen(examenId: number) {
      // Implementar lógica para eliminar un examen
      console.log('Eliminar examen', examenId);
      // Aquí podrías mostrar un diálogo de confirmación antes de eliminar
      if (confirm('¿Estás seguro de que quieres eliminar este examen?')) {
        this.examenes = this.examenes.filter(exam => exam.id !== examenId);
      }
    }

    loadCourseData(cursoId: number) {
      try {
        this.loading = true;
        // Simulando carga de datos - Aquí conectarías con tu servicio real
        this.curso = {
          id: cursoId,
          nombre: 'Introducción a la Programación',
          profesor: 'Dr. Ana García',
          categoria: 'Tecnología',
          progreso: 75,
          fechaInicio: '2024-01-15',
          fechaFin: '2024-05-30',
          descripcion: 'Aprende los fundamentos de la programación con Python y desarrollo de algoritmos básicos.'
        };

        // Cargar eventos del curso
        this.events = [
          { id: '1', date: new Date(2024, 0, 15), type: 'class', title: 'Introducción a Variables', content: 'Aprende los conceptos básicos de variables en programación.', courseId: cursoId, duration: '45min' },
          { id: '2', date: new Date(2024, 0, 20), type: 'pdf', title: 'Guía de Sintaxis Python', content: 'Documento de referencia para la sintaxis básica de Python.', courseId: cursoId, size: '2.5MB' },
          { id: '3', date: new Date(2024, 1, 5), type: 'exam', title: 'Primer Parcial', content: 'Evaluación sobre los conceptos básicos de programación.', courseId: cursoId },
          { id: '4', date: new Date(2024, 1, 10), type: 'class', title: 'Estructuras de Control', content: 'Aprende sobre if, else, loops y su implementación.', courseId: cursoId, duration: '60min' },
          { id: '5', date: new Date(2024, 1, 25), type: 'pdf', title: 'Ejercicios de Práctica', content: 'Conjunto de ejercicios para practicar lo aprendido.', courseId: cursoId, size: '1.8MB' },
        ];

      } catch (e) {
        this.error = 'Error al cargar los datos del curso';
      } finally {
        this.loading = false;
      }
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

    previousMonth() {
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
      this.generateCalendarDays();
    }

    nextMonth() {
      this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
      this.generateCalendarDays();
    }

    hasEvent(day: Date): boolean {
      return this.events.some(event => this.isSameDay(event.date, day));
    }

    getEventForDay(day: Date): Event | undefined {
      return this.events.find(event => this.isSameDay(event.date, day));
    }

    isSameDay(date1: Date, date2: Date): boolean {
      return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    }

    selectDay(day: Date) {
      const event = this.getEventForDay(day);
      if (event) {
        this.selectedEvent = event;
      }
    }

    closeEventModal() {
      this.selectedEvent = null;
    }

    selectTab(tab: string) {
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

    volverALista() {
      this.router.navigate(['/cursos']);
    }

    navegarACrearExamen() {
      this.router.navigate(['/examen/crear-examen']);
    }

    navegarARealizarExamen(examenId: number) {
      this.router.navigate(['examen/realizar-examen', examenId]);
    }

    irAClase(claseId: string) {
      this.router.navigate([`/clase/${claseId}`]);
    }

    navegarACrearClase() {
      this.router.navigate(['/curso', this.cursoId, 'crear-clase']);
    }
  
    editarClase(claseId: number) {
      this.router.navigate(['/curso', this.cursoId, 'editar-clase', claseId]);
    }
  
    eliminarClase(claseId: number) {
      if (confirm('¿Estás seguro de que quieres eliminar esta clase?')) {
        this.clases = this.clases.filter(clase => clase.id !== claseId);
      }
    } 
    
  }