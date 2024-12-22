import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {



   // Aquí puedes agregar lógica para manejar el formulario de contacto
   onSubmit(event: Event) {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  }

}
