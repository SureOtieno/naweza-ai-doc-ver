import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [Button],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss',
})
export class AddButtonComponent {}
