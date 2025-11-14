import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkflowManagement} from './workflow-management';
import {FlowDesigner} from './pages/flow-designer/flow-designer';
import {UpdateFlow} from './pages/update-flow/update-flow';
import {ViewFlow} from './pages/view-flow/view-flow';

const routes: Routes = [
  {
    // The default route for /flow-management
    path: '',
    component: WorkflowManagement,
  },
  {
    // The designer route for /flow-management/flow-designer
    path: 'flow-designer',
    component: FlowDesigner,
  },
  {
    // The view route for /flow-management/view-flow
    path: 'view-flow',
    component: ViewFlow,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
