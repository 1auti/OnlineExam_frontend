import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CursoComponent } from './curso/curso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from '../layout/home/home.component';
import { MateriaComponent } from './materia/materia.component';
import { ColegiosComponent } from './colegios/colegios.component';
import { AulasComponent } from './aulas/aulas.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { GestionarEstudiantesComponent } from './estudiantes/gestionar-estudiantes/gestionar-estudiantes.component';
import { GestionarProfesoresComponent } from './profesores/gestionar-profesores/gestionar-profesores.component';
import { CrearExamenComponent } from './interfaz-examen/crear-examen/crear-examen.component';
import { InterfazExamenComponent } from './interfaz-examen/interfaz-examen.component';
import { EditarExamenComponent } from './interfaz-examen/editar-examen/editar-examen.component';
import { ClaseComponent } from './clase/clase.component';
import { CrearClaseComponent } from './clase/crear-clase/crear-clase.component';
import { EditarClaseComponent } from './clase/editar-clase/editar-clase.component';
import { RankingColegiosComponent } from './ranking/ranking-colegios/ranking-colegios.component';
import { RankingAulasComponent } from './ranking/ranking-aulas/ranking-aulas.component';
import { RankingAulaComponent } from './ranking/ranking-aula/ranking-aula.component';
import { CrearCursoComponent } from './curso/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './curso/editar-curso/editar-curso.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cursos', component: CursoComponent },
  { path: 'cursos/crear', component: CrearCursoComponent },
  { path: 'cursos/editar/:id', component: EditarCursoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'clase/:id', component: ClaseComponent },
  { 
    path: 'curso/:id',
    component: MateriaComponent,
  },
  { path: 'curso/:id/crear-clase', component: CrearClaseComponent },
  { path: 'curso/:id/editar-clase/:claseId', component: EditarClaseComponent },
  { 
    path: 'examen',
    children: [
      { path: 'crear-examen', component: CrearExamenComponent },
      { path: 'editar-examen', component: EditarExamenComponent },
      { path: 'realizar-examen/:id', component: InterfazExamenComponent }
    ]
  },
  { path: 'colegios', component: ColegiosComponent },
  { path: 'colegios/:id/aulas', component: AulasComponent },
  { path: 'colegios/:id/profesores', component: ProfesoresComponent },
  { path: 'colegios/:id/aulas/:aulaId/estudiantes', component: EstudiantesComponent },
  { path: 'colegios/:id/aulas/:aulaId/gestionar-estudiantes', component: GestionarEstudiantesComponent },
  { path: 'colegios/:id/profesores/gestionar', component: GestionarProfesoresComponent },
  {
    path: 'ranking',
    children: [
      { path: 'colegio', component: RankingColegiosComponent },
      { path: 'aulas', component: RankingAulasComponent },
      { path: 'aula/:id', component: RankingAulaComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }