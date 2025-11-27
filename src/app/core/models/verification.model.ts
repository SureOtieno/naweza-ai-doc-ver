
interface VerificationRecord {
  id: string;
  flowName: string;
  submitter: string;
  submissionDate: Date;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REVIEW';
  documentCount: number;
}


interface ExtractedField {
  fieldName: string;
  extractedValue: string;
  confidence: number; // 0.0 to 1.0
  validationStatus: 'MATCH' | 'MISMATCH' | 'N/A';
}

interface DocumentDetail {
  docType: string;
  imageUrl: string;
  fields: ExtractedField[];
  qualityScore: number; // 0.0 to 1.0 for image quality (e.g., blur, glare)
}

interface VerificationResult {
  transactionId: string;
  flowName: string;
  status: 'SUCCESS' | 'FAILED' | 'REVIEW';
  overallScore: number; // Overall confidence or score
  documents: DocumentDetail[];
  submissionDate: Date;
  aiReportLink: string;
}
