import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Layout} from './layout';


const routes: Routes = [
  {
    path: 'flow-management',
    component: Layout,
    loadChildren: () => import('../workflow-management/workflow-management-module').then((m) => m.WorkflowManagementModule),
  },

  // ... other routes
  { path: '**', redirectTo: '' }, // Redirect any unknown paths back to the dashboard root
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
