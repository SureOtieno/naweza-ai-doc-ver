import {Component, OnInit} from '@angular/core';
import { CommonModule, NgFor, NgIf, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // To get the ID from the URL


@Component({
  selector: 'app-verification-details',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, DatePipe],
  templateUrl: './verification-details.html',
  styleUrl: './verification-details.scss'
})
export class VerificationDetails implements OnInit {

  transactionId: string = '';
  result: VerificationResult | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 1. Get ID from the URL
    this.route.params.subscribe(params => {
      this.transactionId = params['id'];
      if (this.transactionId) {
        this.loadVerificationDetails(this.transactionId);
      }
    });
  }

  /**
   * Fetches detailed results for the given transaction ID.
   */
  loadVerificationDetails(id: string): void {
    console.log(`Loading details for Transaction ID: ${id}`);

    // 🚨 Mock Data for Example TXN-00101 (Success)
    this.result = {
      transactionId: id,
      flowName: 'Standard KYC Identity Check',
      status: 'SUCCESS',
      overallScore: 0.98,
      submissionDate: new Date('2025-11-14T10:30:00'),
      aiReportLink: '#',
      documents: [
        {
          docType: 'National ID (Front)',
          imageUrl: 'https://via.placeholder.com/400x250?text=ID+FRONT+IMAGE', // Placeholder for actual image
          qualityScore: 0.95,
          fields: [
            { fieldName: 'Full Name', extractedValue: 'JOHN DOE', confidence: 0.99, validationStatus: 'MATCH' },
            { fieldName: 'ID Number', extractedValue: '12345678A', confidence: 1.00, validationStatus: 'MATCH' },
            { fieldName: 'Date of Birth', extractedValue: '1990-01-15', confidence: 0.97, validationStatus: 'MATCH' },
          ],
        },
        {
          docType: 'National ID (Back)',
          imageUrl: 'https://via.placeholder.com/400x250?text=ID+BACK+IMAGE', // Placeholder for actual image
          qualityScore: 0.82, // Lower score due to glare
          fields: [
            { fieldName: 'Issuing Authority', extractedValue: 'Ministry of Interior', confidence: 0.99, validationStatus: 'MATCH' },
            { fieldName: 'Signature Match', extractedValue: 'YES', confidence: 0.85, validationStatus: 'MATCH' },
          ],
        },
      ],
    };
  }

  /**
   * Helper to format confidence as a percentage.
   */
  formatPercent(value: number): string {
    return (value * 100).toFixed(1) + '%';
  }
}
