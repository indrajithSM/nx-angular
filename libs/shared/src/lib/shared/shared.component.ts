import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-angular-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css',
})
export class SharedComponent {}
