import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CourseCalendarComponent } from './course-calendar/course-calendar.component';
import { GestionSeccionComponent } from './gestion-seccion/gestion-seccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RankingComponent } from './ranking/ranking.component';
import { InputFieldComponentComponent } from './input-field-component/input-field-component.component';


@NgModule({
  declarations: [
    CourseCalendarComponent,
    GestionSeccionComponent,
    InputFieldComponentComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    CourseCalendarComponent,
    GestionSeccionComponent,
    InputFieldComponentComponent,
    RankingComponent
  ]
})
export class ComponentsModule { }
