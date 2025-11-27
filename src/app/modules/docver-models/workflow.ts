
export interface IVerificationStep {
  id: string; // Unique identifier (e.g., 'id_verification', 'sanction_search')
  name: string; // User-facing name (e.g., 'ID Check')
  description: string;
  type: 'IDENTITY' | 'FINANCIAL' | 'LEGAL' | 'CUSTOM';
  enabled: boolean; // Whether the user has selected it for their flow
  config?: any; // Future use: specific settings for this step (e.g., minimum ID score)
}

// src/app/core/models/workflow.ts (Adding flow status)

export interface ISavedFlow {
  id: number;
  name: string;
  stepsCount: number;
  lastUpdated: Date;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
  isDefault: boolean; // Indicates the flow currently used by the system
  steps: IVerificationStep[]; // Details of the steps inside (optional for the dashboard view)
}
