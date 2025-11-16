import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-key-clients',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './key-clients.component.html',
  styleUrl: './key-clients.component.scss',
})
export class KeyClientsComponent {}
