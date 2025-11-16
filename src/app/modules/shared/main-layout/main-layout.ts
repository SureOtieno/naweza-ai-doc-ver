// src/app/modules/shared/main-layout/main-layout.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import {SidebarComponent} from '../components/sidebar/sidebar';
import {
  WorkflowManagementComponent
} from '../../workflow-management/workflow-management';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, WorkflowManagementComponent], // Include layout components
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayoutComponent { }
