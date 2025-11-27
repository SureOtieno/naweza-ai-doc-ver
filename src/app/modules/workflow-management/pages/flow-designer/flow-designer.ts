// src/app/modules/flow-management/flow-designer/flow-designer.component.ts

import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule, NgFor, NgIf } from '@angular/common'; // Used for *ngFor, *ngIf
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router'; // Used for [(ngModel)]

interface VerificationStep {
  id: number;
  name: string;
  description: string;
  enabled: boolean;
}

@Component({
  selector: 'app-flow-designer',
  standalone: true,
  // Ensure all necessary modules are imported for standalone components
  imports: [CommonModule, DragDropModule, FormsModule, NgFor, NgIf],
  templateUrl: './flow-designer.html',
  styleUrls: ['./flow-designer.scss']
})
export class FlowDesignerComponent implements OnInit {
  flowName: string = '';

  availableSteps: VerificationStep[] = [];
  currentFlow: VerificationStep[] = [];

  // 🚨 Inject Router in the constructor
  constructor(private router: Router) {}

  ngOnInit() {
    this.availableSteps = [
      { id: 1, name: 'OCR Text Extraction', description: 'Extracts all text fields from the document.', enabled: true },
      { id: 2, name: 'AI Fraud Detection', description: 'Scans documents for signs of digital tampering or forgery.', enabled: true },
      { id: 3, name: 'Database Cross-Check', description: 'Verifies extracted data against a trusted external source.', enabled: true },
      { id: 4, name: 'IPRS Check', description: 'Compares document image against live user photo.', enabled: true },
      { id: 5, name: 'CRB', description: 'Check credit rating status with Credit Reference Bureau.', enabled: true },
      { id: 6, name: 'Sanction-List', description: 'Perform search for target in the sanctions list.', enabled: true },
      { id: 7, name: 'Facial Recognition', description: 'Compares document image against live user photo.', enabled: true }, // Disabled step
    ];
  }

  drop(event: CdkDragDrop<VerificationStep[]>) {
    // 1. Dropped within the same list (reordering the flow)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    // 2. Dropped between different lists (moving or transferring)
    else {
      // Use transferArrayItem to move the item between the arrays.
      // This physically removes it from the source array (availableSteps)
      // and adds it to the target array (currentFlow) or vice-versa.
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  saveFlow() {
    if (this.currentFlow.length === 0 || this.flowName.trim() === '') {
      console.error("Flow must have a name and at least one step.");
      return;
    }

    const flowData = {
      name: this.flowName,
      steps: this.currentFlow.map((step, index) => ({
        sequence: index + 1,
        stepName: step.name,
        stepId: step.id // Unique ID for persistence
      }))
    };

    console.log('Flow Saved:', flowData);
    // Add service call to save flowData to the backend here
  }

  /**
   * Clears all steps from the current flow and returns them to the available list.
   */
  clearFlow(): void {
    if (confirm('Are you sure you want to clear the entire verification flow? All steps will be returned to the Available Modules list.')) {

      // Move all items from currentFlow back to availableSteps
      this.availableSteps.push(...this.currentFlow);
      this.currentFlow = []; // Reset the flow
      this.flowName = '';

      console.log('Flow cleared and steps returned to the module list.');
    }
  }

  /**
   * Removes a single step from the current flow by its index and returns it to the available list.
   * @param index The index of the step to remove.
   */
  removeStep(index: number): void {
    const removedStep = this.currentFlow.splice(index, 1)[0];

    // Return the removed step to the available list
    this.availableSteps.push(removedStep);

    console.log(`Removed step and returned to list: ${removedStep.name}`);
  }

  /**
   * Navigates the user back to the main Flow Management dashboard/list page.
   */
  goToFlowManagement(): void {
    // Assuming the main dashboard for flow management is at the root of the module
    this.router.navigate(['/workflow-management']);
  }

}
