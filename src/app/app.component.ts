import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
 