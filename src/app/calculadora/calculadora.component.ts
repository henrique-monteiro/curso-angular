
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  somar(): void {
    this.resultado = this.num1 + this.num2;
  }
}
