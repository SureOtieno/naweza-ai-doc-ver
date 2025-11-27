interface FlowSummary {
  id: number;
  name: string;
  stepsCount: number;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
}

interface DocumentRequirement {
  id: number;
  documentType: string;
  isRequired: boolean;
  instructions: string;
  file?: File | null;
  previewUrl?: string;
  isUploaded: boolean;
  hasError: boolean;
}
