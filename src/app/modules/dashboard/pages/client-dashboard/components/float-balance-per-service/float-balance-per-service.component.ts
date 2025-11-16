import { Component, signal } from '@angular/core';
import { NgForOf } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Column } from '../../../../../../shared/models/column';

@Component({
  selector: 'app-float-balance-per-service',
  standalone: true,
  imports: [NgForOf, PrimeTemplate, TableModule],
  templateUrl: './float-balance-per-service.component.html',
  styleUrl: './float-balance-per-service.component.scss',
})
export class FloatBalancePerServiceComponent {
  title = signal('Float Balances Per Service');

  columns: Column[] = [
    {
      header: 'Service',
      field: 'service',
    },
    {
      header: 'Float Balance',
      field: 'floatBalance',
    },
  ];

  rows = [
    {
      service: 'Airtime',
      floatBalance: '400000',
    },
    {
      service: 'Pesalink',
      floatBalance: '350000',
    },
    {
      service: 'Mpesa Service',
      floatBalance: '250000',
    },
  ];
}
