import { Component } from '@angular/core';
import { Column } from '../../shared/models/column';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { TableHeaderComponent } from '../../shared/components/table-header/table-header.component';

@Component({
  selector: 'app-audit-trail',
  standalone: true,
  imports: [DatatableComponent, TableHeaderComponent],
  templateUrl: './audit-trail.component.html',
  styleUrl: './audit-trail.component.scss',
})
export class AuditTrailComponent {
  title = 'Audit Trail';

  columnsData: Column[] = [];
  rowData: Array<any> = [];
}
