import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CursoComponent } from './curso/curso.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from '../layout/home/home.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MateriaComponent } from './materia/materia.component';
import { ColegiosComponent } from './colegios/colegios.component';
import { AulasComponent } from './aulas/aulas.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { GestionarEstudiantesComponent } from './estudiantes/gestionar-estudiantes/gestionar-estudiantes.component';
import { GestionarProfesoresComponent } from './profesores/gestionar-profesores/gestionar-profesores.component';
import { ComponentsModule } from "../components/components.module";
import { InterfazExamenComponent } from './interfaz-examen/interfaz-examen.component';
import { CrearExamenComponent } from './interfaz-examen/crear-examen/crear-examen.component';
import { EditarExamenComponent } from './interfaz-examen/editar-examen/editar-examen.component';
import { ClaseComponent } from './clase/clase.component';
import { CrearClaseComponent } from './clase/crear-clase/crear-clase.component';
import { EditarClaseComponent } from './clase/editar-clase/editar-clase.component';
import { RankingColegiosComponent } from './ranking/ranking-colegios/ranking-colegios.component';
import { RankingAulasComponent } from './ranking/ranking-aulas/ranking-aulas.component';
import { RankingAulaComponent } from './ranking/ranking-aula/ranking-aula.component';
import { CrearCursoComponent } from './curso/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    CursoComponent,
    ContactoComponent,
    MateriaComponent,
    ColegiosComponent,
    AulasComponent,
    ProfesoresComponent,
    EstudiantesComponent,
    GestionarEstudiantesComponent,
    GestionarProfesoresComponent,
    InterfazExamenComponent,
    CrearExamenComponent,
    EditarExamenComponent,
    ClaseComponent,
    CrearClaseComponent,
    EditarClaseComponent,
    RankingColegiosComponent,
    RankingAulasComponent,
    RankingAulaComponent,
    CrearCursoComponent,
    EditarCursoComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    
],
  exports:[
    PerfilComponent,
    CursoComponent,
    ContactoComponent,
    RankingColegiosComponent
  ]
})
export class PagesModule { }
