import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ConfirmationService, MenuItem, PrimeTemplate } from 'primeng/api';

// Note: Removed internal services/models if they aren't provided by the parent
// import { DataExplorationService } from '../../services/data-exploration.service';
import { MessageService } from 'primeng/api';

// ❌ Removed component-specific imports (CountdownComponent, TagModule)
// as custom rendering is now handled by TemplateRef from the parent
import { TableAction, Column } from '../../models/column';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TableModule,
    ButtonModule,
    MenuModule,
    ToastModule,
    ConfirmDialogModule,
    MultiSelectModule, // 👈 Required for column selection
    InputTextModule,
    IconFieldModule, // 👈 Required for search input icon
    InputIconModule, // 👈 Required for search input icon
    PrimeTemplate,
    TooltipModule
  ],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class DatatableComponent implements OnInit {
  @Input() rows: any[] = [];

  // 💡 [cols] holds the currently visible columns. The table template iterates over this.
  @Input() cols: Column[] = [];

  @Input() actions: TableAction[] = [];
  @Input() editRoute: string | string[] = '';
  @Input() pdfTitle = 'Report';
  @Input() csvTitle = 'Report';

  // 🎯 FIX: [allCols] is the input from the parent containing ALL available columns.
  @Input() allCols!: Column[];

  // State properties for column management
  // 🎯 FIX: Bind p-multiSelect options to this, which comes from [allCols] input.
  get allColumns(): Column[] {
    return this.allCols || [];
  }

  // 🎯 FIX: Bind p-multiSelect model to this, which comes from [cols] input (visible columns).
  // We use the @Input() [cols] directly, but need a private variable to handle the ngModel binding.
  // We use a setter/getter pattern to ensure updates to the multi-select update the visible columns [cols]
  private _selectedColumns: Column[] = [];

  @Input()
  set selectedColumns(value: Column[]) {
    this._selectedColumns = value;
    // When the user selects/unselects columns in the dropdown, update the visible columns array
    this.cols = value;
  }
  get selectedColumns(): Column[] {
    return this._selectedColumns.length > 0 ? this._selectedColumns : this.cols;
  }

  @Input() loading = false; // DEFAULT FALSE

  searchKeyword = '';

  private confirmation = inject(ConfirmationService);
  private message = inject(MessageService);

  @Output() delete = new EventEmitter<any>();

  ngOnInit() {
    // 🎯 FIX: Initialize internal state based on inputs provided by the parent
    if (this.allCols) {
      // Initialize selectedColumns to the list of columns passed in [cols]
      // or filter from allCols based on defaultVisible if [cols] wasn't explicitly set up correctly initially.
      // Assuming parent ViewAllTasksComponent correctly populates [cols] with visible columns:
      this._selectedColumns = [...this.cols];
    }
  }

  get globalFilterFields(): string[] {
    // Use the currently selected columns for global searching
    return this.selectedColumns.map(c => c.field);
  }

  clear(table: Table) {
    table.clear();
    this.searchKeyword = '';
    table.first = 0;
  }

  getMenuItems(row: any): MenuItem[] {
    // SAFETY FIRST: Guard against PrimeNG dummy row during init
    if (!row) {
      return [];
    }

    return this.actions
      .filter(action => {
        // If visible() exists, use it. Otherwise, show always
        return action.visible ? action.visible(row) : true;
      })
      .map(action => ({
        label: action.label,
        icon: action.icon,
        styleClass: action.color ? `p-button-${action.color}` : '',
        disabled: action.disabled?.(row) ?? false,
        // SAFE COMMAND: Only call if function exists
        command: () => action.command?.(row),
      }));
  }

  deleteRow(row: any) {
    this.confirmation.confirm({
      message: 'Delete permanently?',
      accept: () => {
        this.delete.emit(row);
        this.message.add({ severity: 'success', summary: 'Deleted', life: 3000 });
      },
    });
  }
}
