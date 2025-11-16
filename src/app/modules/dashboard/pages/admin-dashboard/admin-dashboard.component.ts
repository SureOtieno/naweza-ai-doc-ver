import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { BarGraphRevenueComponent } from './components/bar-graph-revenue/bar-graph-revenue.component';
import { BarGraphRegionCountsComponent } from './components/bar-graph-region-counts/bar-graph-region-counts.component';
import { CountriesDistributionsDonutChartComponent } from './components/countries-distributions-donut-chart/countries-distributions-donut-chart.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { KeyServicesComponent } from './components/key-services/key-services.component';
import { KeyClientsComponent } from './components/key-clients/key-clients.component';
import { TransactionsPerWeekComponent } from './components/transactions-per-week/transactions-per-week.component';
import { MerchantFloatBalancesComponent } from './components/merchant-float-balances/merchant-float-balances.component';
import { TotalValuePerWeekComponent } from './components/total-value-per-week/total-value-per-week.component';
import { RevenuePerServiceComponent } from './components/revenue-per-service/revenue-per-service.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CardModule,
    ChartModule,
    BarGraphRevenueComponent,
    BarGraphRegionCountsComponent,
    CountriesDistributionsDonutChartComponent,
    ProgressBarModule,
    KeyServicesComponent,
    KeyClientsComponent,
    TransactionsPerWeekComponent,
    MerchantFloatBalancesComponent,
    TotalValuePerWeekComponent,
    RevenuePerServiceComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {}
