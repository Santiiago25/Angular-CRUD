import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EjemploComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Crud Angular Interpolación';
}
