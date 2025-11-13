import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkflowManagement} from './workflow-management';
import {FlowDesignerComponent} from './pages/flow-designer/flow-designer';
import {UpdateFlow} from './pages/update-flow/update-flow';
import {ViewFlow} from './pages/view-flow/view-flow';

const routes: Routes = [
  {
    path: '',
    component: WorkflowManagement,
    children: [
      {
        path: 'flow-designer',
        component: FlowDesignerComponent,
      },
      {
        path: 'view-flow',
        component: ViewFlow,
      },
      {
        path: 'update-flow',
        component: UpdateFlow,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
