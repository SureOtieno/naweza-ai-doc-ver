// src/app/modules/workflow-management/workflow-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Products} from './products';
import {IdVerification} from './pages/id-verification/id-verification';
import {SunctionListSearch} from './pages/sunction-list-search/sunction-list-search';

const routes: Routes = [
  {
    // Matches /flow-management
    path: '',
    component: Products,
    pathMatch: 'full',
  },
  {
    // Matches /flow-management/designer (Changed path to singular for brevity)
    path: 'id-verification',
    component: IdVerification,
  },
  {
    // Matches /flow-management/view
    path: 'sunction-list-search', // Changed path to singular for brevity
    component: SunctionListSearch,
  },
  // Adding the optional ID parameter for editing
  // {
  //   // Matches /flow-management/designer/123
  //   path: 'flow-designer/:id',
  //   component: FlowDesignerComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
