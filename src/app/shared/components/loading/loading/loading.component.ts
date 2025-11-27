import { Component, inject } from '@angular/core';
import { LoadingService } from '../../../services/loading/loading.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinner],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  //Inject Loading Service
  loadingService = inject(LoadingService);
  loading = this.loadingService.loading;
}
