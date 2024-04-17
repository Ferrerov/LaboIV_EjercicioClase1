import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigateByUrl('/calculadora');
} 
}
