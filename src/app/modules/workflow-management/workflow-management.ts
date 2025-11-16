// src/app/modules/flow-management/flow-management-dashboard/flow-management-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf, DatePipe } from '@angular/common'; // Include DatePipe for template
import { FormsModule } from '@angular/forms'; // Included for potential future search/filtering

interface FlowSummary {
  id: number;
  name: string;
  stepsCount: number;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
  lastUpdated: Date;
  isDefault: boolean;
}

@Component({
  selector: 'app-workflow-management',
  standalone: true,
  // Ensure all necessary modules are imported
  imports: [CommonModule, NgFor, NgIf, RouterLink, FormsModule, DatePipe],
  templateUrl: './workflow-management.html',
  // You would need to create this SCSS file for the dark theme to match the template
  styleUrls: ['./workflow-management.scss']
})
export class WorkflowManagementComponent implements OnInit {
  savedFlows: FlowSummary[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Placeholder Data matching the template logic
    this.savedFlows = [
      { id: 1, name: 'Standard KYC Identity Check', stepsCount: 5, status: 'ACTIVE', lastUpdated: new Date('2025-11-10'), isDefault: true },
      { id: 2, name: 'High Risk Client Onboarding Flow', stepsCount: 12, status: 'DRAFT', lastUpdated: new Date('2025-11-14'), isDefault: false },
      { id: 3, name: 'Internal HR Document Approval', stepsCount: 3, status: 'INACTIVE', lastUpdated: new Date('2025-11-01'), isDefault: false },
    ];
  }

  // --- Actions ---

  /**
   * Navigates to the Flow Designer component to create a new flow.
   */
  createNewFlow(): void {
    this.router.navigate(['/workflow-management/flow-designer']);
  }

  /**
   * Navigates to the Flow Designer component to edit an existing flow.
   * @param flowId The ID of the flow to edit.
   */
  editFlow(flowId: number): void {
    this.router.navigate(['/workflow-management/flow-designer', flowId]);
    console.log(`Navigating to edit flow ID: ${flowId}`);
  }

  /**
   * Sets the selected flow as the new default flow.
   * @param flowId The ID of the flow to make default.
   */
  switchFlow(flowId: number): void {
    if (confirm('Are you sure you want to make this the new default flow for all verification requests?')) {
      this.savedFlows.forEach(flow => {
        flow.isDefault = (flow.id === flowId);
      });
      console.log(`Switched default flow to ID: ${flowId}`);
      // In a real app, call a service here to update the backend
    }
  }

  /**
   * Toggles the active/inactive status of a non-default flow.
   * @param flowId The ID of the flow to toggle.
   */
  toggleFlowStatus(flowId: number): void {
    const flow = this.savedFlows.find(f => f.id === flowId);
    if (flow && !flow.isDefault) {
      if (flow.status === 'ACTIVE') {
        flow.status = 'INACTIVE';
        console.log(`Disabled flow ID: ${flowId}`);
      } else if (flow.status === 'INACTIVE') {
        flow.status = 'ACTIVE';
        console.log(`Enabled flow ID: ${flowId}`);
      }
      // In a real app, call a service to update the backend
    }
  }
}
