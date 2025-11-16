import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-key-services',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './key-services.component.html',
  styleUrl: './key-services.component.scss',
})
export class KeyServicesComponent {}
