// src/app/modules/workflow-management/workflow-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowManagementComponent } from './workflow-management'; // Dashboard
import { FlowDesignerComponent } from './pages/flow-designer/flow-designer';
import { ViewFlow } from './pages/view-flow/view-flow';

const routes: Routes = [
  {
    // Matches /flow-management
    path: '',
    component: WorkflowManagementComponent,
    pathMatch: 'full',
  },
  {
    // Matches /flow-management/designer (Changed path to singular for brevity)
    path: 'flow-designer',
    component: FlowDesignerComponent,
  },
  {
    // Matches /flow-management/view
    path: 'view-flow', // Changed path to singular for brevity
    component: ViewFlow,
  },
  // Adding the optional ID parameter for editing
  {
    // Matches /flow-management/designer/123
    path: 'flow-designer/:id',
    component: FlowDesignerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
