import {Component, inject, OnInit} from '@angular/core';
import {ISavedFlow} from '../docver-models/workflow';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-workflow-management',
  imports: [
    DatePipe,
    NgClass,
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './workflow-management.html',
  styleUrl: './workflow-management.scss'
})
export class WorkflowManagement implements OnInit {
  savedFlows: ISavedFlow[] = [
    { id: 1, name: 'Standard Client Onboarding', stepsCount: 4, lastUpdated: new Date(2025, 10, 1), status: 'ACTIVE', isDefault: true, steps: [] },
    { id: 2, name: 'High Risk Investor Flow', stepsCount: 6, lastUpdated: new Date(2025, 10, 5), status: 'INACTIVE', isDefault: false, steps: [] },
    { id: 3, name: 'Partner Integration Flow (API)', stepsCount: 3, lastUpdated: new Date(2025, 10, 10), status: 'DRAFT', isDefault: false, steps: [] },
  ];

  router = inject(Router);

  ngOnInit(): void {
    // TODO: Fetch real data from a WorkflowService here
  }

  // Action: Set a flow as the primary active flow
  switchFlow(flowId: number): void {
    this.savedFlows.forEach(flow => {
      if (flow.id === flowId) {
        flow.isDefault = true;
        flow.status = 'ACTIVE';
      } else {
        flow.isDefault = false;
        if (flow.status === 'ACTIVE') {
          flow.status = 'INACTIVE';
        }
      }
    });
    // TODO: Call API to persist default flow selection
    console.log(`Switched default flow to ID: ${flowId}`);
  }

  // Action: Toggle a flow's activation status
  toggleFlowStatus(flowId: number): void {
    const flow = this.savedFlows.find(f => f.id === flowId);
    if (flow) {
      if (flow.isDefault) {
        alert("Cannot disable the current ACTIVE flow. Switch to another flow first.");
        return;
      }
      flow.status = flow.status === 'INACTIVE' ? 'ACTIVE' : 'INACTIVE';
      // TODO: Call API to update flow status
      console.log(`Toggled flow ID ${flowId} to ${flow.status}`);
    }
  }

  // Navigation: To the Flow Designer component
  // We'll use routerLink for navigation
  editFlow(flowId: number): void {
    // TODO: Implement navigation to the Flow Designer, passing the flowId as a parameter
    console.log(`Navigating to Flow Designer for ID: ${flowId}`);
  }

  goTo() {
    this.router.navigate(['/flow-management/flow-designer']);
  }
}

