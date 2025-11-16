import { Component, signal } from '@angular/core';
import { Column } from '../../../../../../shared/models/column';
import { TableModule } from 'primeng/table';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-merchant-float-balances',
  standalone: true,
  imports: [TableModule, NgForOf],
  templateUrl: './merchant-float-balances.component.html',
  styleUrl: './merchant-float-balances.component.scss',
})
export class MerchantFloatBalancesComponent {
  title = signal('Merchant Float Balances');

  columns: Column[] = [
    {
      header: 'Merchant Name',
      field: 'merchantName',
    },
    {
      header: 'Float Balance',
      field: 'merchantFloatBalance',
    },
  ];

  rows = [
    {
      merchantName: 'JamboPay',
      merchantFloatBalance: '400000',
    },
    {
      merchantName: 'PayConnect',
      merchantFloatBalance: '350000',
    },
    {
      merchantName: 'Safaricom',
      merchantFloatBalance: '250000',
    },
    {
      merchantName: 'Multichoice',
      merchantFloatBalance: '200000',
    },
  ];
}
