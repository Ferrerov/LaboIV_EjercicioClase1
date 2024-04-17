import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  protected edadUno: number = 0;
  protected edadDos: number = 0;
  protected suma: number = 0;
  protected promedio: number = 0;

  protected onBtn()
  {
    //this.title="hola";
  }

  protected calcularEdadYPromedio()
  {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }
}
