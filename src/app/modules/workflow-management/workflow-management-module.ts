import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from 'primeng/dragdrop';
import {FormsModule} from '@angular/forms';
import {WorkflowRoutingModule} from './workflow-routing-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorkflowRoutingModule,
    FormsModule,
    DragDropModule,
  ]
})
export class WorkflowManagementModule { }
