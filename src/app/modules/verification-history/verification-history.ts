import {Component, inject, OnInit} from '@angular/core';
import { CommonModule, NgFor, NgIf, DatePipe } from '@angular/common';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-verification-history',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink, DatePipe],
  templateUrl: './verification-history.html',
  styleUrl: './verification-history.scss'
})
export class VerificationHistory implements OnInit{

  historyRecords: VerificationRecord[] = [];
  router = inject(Router);

  constructor() { }

  ngOnInit(): void {
    // 🚨 Mock Data Initialization
    this.historyRecords = [
      { id: 'TXN-00101', flowName: 'Standard KYC Identity Check', submitter: 'John Doe', submissionDate: new Date('2025-11-14T10:30:00'), status: 'SUCCESS', documentCount: 3 },
      { id: 'TXN-00102', flowName: 'High Risk Client Onboarding Flow', submitter: 'Jane Smith', submissionDate: new Date('2025-11-14T14:45:00'), status: 'REVIEW', documentCount: 5 },
      { id: 'TXN-00103', flowName: 'Basic Address Verification', submitter: 'Alice Brown', submissionDate: new Date('2025-11-13T09:00:00'), status: 'FAILED', documentCount: 1 },
      { id: 'TXN-00104', flowName: 'Standard KYC Identity Check', submitter: 'Mark Green', submissionDate: new Date('2025-11-12T16:20:00'), status: 'PENDING', documentCount: 3 },
    ];
  }

  /**
   * Placeholder for navigating to a detailed view of the verification result.
   */
  viewDetails(recordId: string): void {
    // In a real app, this would navigate to a detailed status page:
    this.router.navigate(['/verification-details', recordId]);
    console.log(`Navigating to details for record: ${recordId}`);
  }
}
