import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-dashboard',
        pathMatch: 'full',
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'client-dashboard',
        component: ClientDashboardComponent,
      },

      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
