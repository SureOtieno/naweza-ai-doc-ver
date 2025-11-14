
import {Component, OnInit} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IVerificationStep} from '../../../docver-models/workflow';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-flow-designer',
  templateUrl: './flow-designer.html',
  imports: [
    CdkDropList,
    CdkDrag,
    NgClass,
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrl: './flow-designer.scss'
})
export class FlowDesigner{
  flowName: string = '';

  // 1. Source: All available verification checks (Static List)
  availableSteps: IVerificationStep[] = [
    { id: 'id_verification', name: 'ID Verification', description: 'Checks document authenticity and photo match.', type: 'IDENTITY', enabled: true },
    { id: 'sanction_list', name: 'Sanction List Search', description: 'Checks global watchlists (OFAC, UN, EU, etc.).', type: 'LEGAL', enabled: true },
    { id: 'crb_verification', name: 'CRB Verification', description: 'Credit history check (Consumer Reporting Bureau).', type: 'FINANCIAL', enabled: true },
    { id: 'iprs_check', name: 'IPRS Check', description: 'Government Identity Register lookup.', type: 'IDENTITY', enabled: true },
    { id: 'pep_check', name: 'PEP (Politically Exposed Person) Check', description: 'Screening against politically exposed persons lists.', type: 'LEGAL', enabled: true },
    // Add more verification steps as needed...
  ];

  // 2. Target: The user's custom flow (Dynamic List)
  currentFlow: IVerificationStep[] = [];

  // 3. Handle Drag & Drop events
  drop(event: CdkDragDrop<IVerificationStep[]>) {
    if (event.previousContainer === event.container) {
      // Reordering within the current flow
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transferring a step from Available to Flow
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.updateFlowStatus();
  }

  // Ensures steps are correctly marked as disabled in the source list once added
  updateFlowStatus() {
    // Logic to update the 'availableSteps' list to prevent double-adding
    this.availableSteps.forEach(step => {
      step.enabled = !this.currentFlow.some(flowStep => flowStep.id === step.id);
    });
  }

  // Logic to save the flow (will call the ApiService)
  saveFlow() {
    const flowData = {
      name: this.flowName,
      steps: this.currentFlow.map((step, index) => ({
        id: step.id,
        order: index + 1
      }))
    };
    console.log('Flow Saved:', flowData);
    // TODO: Integrate with ApiService to post flowData to the backend
  }
}
