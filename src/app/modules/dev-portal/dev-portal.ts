import {Component, inject} from '@angular/core';
import {CommonModule, DatePipe, NgForOf, NgIf} from "@angular/common";
import {Router} from '@angular/router';

@Component({
  selector: 'app-dev-portal',
    imports: [
        CommonModule,
        DatePipe,
        NgForOf,
        NgIf
    ],
  templateUrl: './dev-portal.html',
  styleUrl: './dev-portal.scss'
})
export class DevPortal {

  router = inject(Router)

  goBack() {

  }
}
