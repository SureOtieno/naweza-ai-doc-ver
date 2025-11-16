import { Component } from '@angular/core';
import { SuccessfulVsFailedTransactionsGraphComponent } from './components/successful-vs-failed-transactions-graph/successful-vs-failed-transactions-graph.component';
import { ServiceVsPerformanceLineGraphComponent } from './components/service-vs-performance-line-graph/service-vs-performance-line-graph.component';
import { KeyClientsComponent } from '../admin-dashboard/components/key-clients/key-clients.component';
import { MerchantFloatBalancesComponent } from '../admin-dashboard/components/merchant-float-balances/merchant-float-balances.component';
import { FloatBalancePerServiceComponent } from './components/float-balance-per-service/float-balance-per-service.component';
import { PrePaidFloatConsumptionPerServiceComponent } from './components/pre-paid-float-consumption-per-service/pre-paid-float-consumption-per-service.component';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [
    SuccessfulVsFailedTransactionsGraphComponent,
    ServiceVsPerformanceLineGraphComponent,
    KeyClientsComponent,
    MerchantFloatBalancesComponent,
    FloatBalancePerServiceComponent,
    PrePaidFloatConsumptionPerServiceComponent,
  ],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss',
})
export class ClientDashboardComponent {}
