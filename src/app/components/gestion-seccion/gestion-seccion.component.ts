import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gestion-seccion',
  templateUrl: './gestion-seccion.component.html',
  styleUrl: './gestion-seccion.component.css'
})
export class GestionSeccionComponent {

  @Input() tieneRolAutorizado: boolean = false;
  @Input() titulo: string = '';
  @Input() items: any[] = [];
  @Input() crearTexto: string = '';
  @Output() crearItem = new EventEmitter<void>();
  @Output() editarItem = new EventEmitter<number>();
  @Output() eliminarItem = new EventEmitter<number>();

  navegarACrear() {
    this.crearItem.emit();
  }

  editar(itemId: number) {
    this.editarItem.emit(itemId);
  }

  eliminar(itemId: number) {
    this.eliminarItem.emit(itemId);
  }

}
