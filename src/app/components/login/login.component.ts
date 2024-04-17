// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent {
  usuario: Usuario = { nombre: '', clave: '' };

  constructor(private router: Router) {}

  onSubmit() {
      this.router.navigateByUrl('/bienvenido');
  } 
}
