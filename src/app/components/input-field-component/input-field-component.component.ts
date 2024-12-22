import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field-component',
  templateUrl: './input-field-component.component.html',
  styleUrl: './input-field-component.component.css'
})
export class InputFieldComponentComponent {
  @Input() label!: string;
  @Input() id!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;
  @Input() errorMessage: string = 'Este campo es obligatorio';
}
