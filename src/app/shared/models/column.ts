// ================================================================
// REUSABLE DATATABLE MODELS
// Use this everywhere — tasks, users, payments, approvals, etc.
// ================================================================

/**
 * Defines a column in the datatable
 */
export interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
  type?: 'text' | 'date' | 'component' | 'boolean' | 'status'; // Added 'status' based on your HTML usage
  template?: any;

  /**
   * 💡 NEW PROPERTY: Determines if the column should be visible when the table first loads.
   * If omitted, it will default to true due to how the rest of the app might be using it,
   * but explicitly setting it helps clarity.
   */
  defaultVisible?: boolean;

  [key: string]: any;
}

/**
 * Action item in the ... menu
 */
export interface TableAction {
  label: string;
  icon: string;
  color?: 'success' | 'info' | 'warning' | 'danger' | 'help';
  visible?: (row: any) => boolean;
  disabled?: (row: any) => boolean;
  command: (row: any) => void;
}


/**
 * PrimeNG Paginator Event — one source of truth!
 */
export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

/**
 * For PDF/Excel export
 */
export interface ExportColumn {
  title: string;
  dataKey: string;
};

