import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Angular CDK, etc., would be imported here if this were a functional module

// --- DATA INTERFACES (Should ideally be in a models file) ---


@Component({
  selector: 'app-document-upload',
  standalone: true,
  // Includes FormsModule to support [(ngModel)] in the template
  imports: [CommonModule, NgFor, NgIf, FormsModule],
  templateUrl: './document-upload.html',
  styleUrls: ['./document-upload.scss']
})
export class DocumentUploadComponent implements OnInit {

  // Data Properties
  availableFlows: FlowSummary[] = [];
  selectedFlow: FlowSummary | null = null;
  requiredDocuments: DocumentRequirement[] = [];

  constructor() {}

  ngOnInit(): void {
    // 🚨 Mock Data Initialization: Replace with a service call in a real application
    this.availableFlows = [
      { id: 1, name: 'Standard KYC Identity Check', stepsCount: 5, status: 'ACTIVE' },
      { id: 2, name: 'High Risk Client Onboarding Flow', stepsCount: 12, status: 'ACTIVE' },
      { id: 3, name: 'Basic Address Verification', stepsCount: 2, status: 'ACTIVE' },
    ];

    // Auto-select the first flow for better UX (optional)
    if (this.availableFlows.length > 0) {
      this.selectedFlow = this.availableFlows[0];
      this.loadRequiredDocuments();
    }
  }

  // --- CORE LOGIC METHODS ---

  /**
   * Loads the required documents based on the currently selected verification flow.
   * In a real application, this would call a FlowService API endpoint.
   */
  loadRequiredDocuments(): void {
    if (!this.selectedFlow) {
      this.requiredDocuments = [];
      return;
    }

    // 🚨 Mock API Response: Document requirements based on Flow ID
    switch (this.selectedFlow.id) {
      case 1: // Standard KYC
        this.requiredDocuments = [
          { id: 101, documentType: 'National ID Card (Front)', isRequired: true, instructions: 'Ensure all four corners are visible and the image is clear.', isUploaded: false, hasError: false },
          { id: 102, documentType: 'National ID Card (Back)', isRequired: true, instructions: 'Ensure the back barcode and signature are readable.', isUploaded: false, hasError: false },
          { id: 103, documentType: 'Proof of Address (Utility Bill)', isRequired: false, instructions: 'Optional. Must be dated within the last 90 days.', isUploaded: false, hasError: false },
        ];
        break;
      case 2: // High Risk Onboarding
        this.requiredDocuments = [
          { id: 201, documentType: 'Passport Photo Page', isRequired: true, instructions: 'Must be a high-resolution scan of the photo page.', isUploaded: false, hasError: false },
          { id: 202, documentType: 'Proof of Funds Document', isRequired: true, instructions: 'Sensitive. Upload encrypted PDF only.', isUploaded: false, hasError: false },
          { id: 203, documentType: 'Video Liveness Check', isRequired: true, instructions: 'Requires live capture via phone camera.', isUploaded: false, hasError: false },
        ];
        break;
      case 3: // Basic Address Verification
        this.requiredDocuments = [
          { id: 301, documentType: 'Utility Bill (Any Type)', isRequired: true, instructions: 'Image must show recipient name and current address.', isUploaded: false, hasError: false },
        ];
        break;
      default:
        this.requiredDocuments = [];
    }
    console.log(`Loaded ${this.requiredDocuments.length} requirements for flow: ${this.selectedFlow.name}`);
  }

  /**
   * Handles file selection from the standard file input (desktop fallback).
   */
  onFileSelected(event: Event, doc: DocumentRequirement): void {
    const fileList: FileList | null = (event.target as HTMLInputElement).files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      doc.file = file;
      doc.isUploaded = true;
      doc.hasError = false;

      // Create a temporary URL for image preview (if needed)
      doc.previewUrl = URL.createObjectURL(file);
      console.log(`File uploaded for ${doc.documentType}: ${file.name}`);

      // In a real app, you'd initiate an API call to upload the file here.
    }
  }

  /**
   * Placeholder for launching the mobile camera or dedicated capture process.
   * This is where a third-party Capture SDK would be integrated.
   */
  initiateCapture(doc: DocumentRequirement): void {
    console.log(`Initiating guided camera capture for ${doc.documentType}...`);
    // Placeholder logic for simulation:
    alert(`Launching camera for: ${doc.documentType}.
    In a real app, this launches the SDK with real-time quality checks.`);

    // Simulate successful capture after delay
    setTimeout(() => {
      // You'd get a processed file/blob from the SDK here
      doc.isUploaded = true;
      doc.hasError = false;
      doc.previewUrl = 'https://via.placeholder.com/150?text=Captured'; // Mock image preview
      console.log(`${doc.documentType} captured successfully.`);
    }, 1000);
  }

  /**
   * Checks if all required documents for the flow have been uploaded.
   */
  isFlowComplete(): boolean {
    if (!this.selectedFlow) {
      return false;
    }

    // Check if every required document is uploaded
    return this.requiredDocuments
      .filter(doc => doc.isRequired)
      .every(doc => doc.isUploaded && !doc.hasError);
  }

  /**
   * Final submission of the flow to trigger AI verification processing.
   */
  submitFlow(): void {
    if (this.isFlowComplete()) {
      console.log('--- Submitting Verification Flow ---');
      this.requiredDocuments.forEach(doc => {
        if (doc.file) {
          console.log(`Submitting ${doc.documentType}: ${doc.file.name}`);
        } else if (doc.isUploaded) {
          console.log(`Submitting captured data for: ${doc.documentType}`);
        }
      });
      // In a real app, navigate to a confirmation page or status page
      alert(`Verification flow '${this.selectedFlow?.name}' submitted successfully!`);
      // this.router.navigate(['/documents/status']);
    } else {
      alert('Please upload all required documents before submitting the flow.');
    }
  }
}
