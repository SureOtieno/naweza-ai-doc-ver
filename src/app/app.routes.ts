// src/app/app.routes.ts (AppRoutingModule content)

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './core/auth_guard/auth-guard';
import { MainLayoutComponent } from './modules/shared/main-layout/main-layout';
import { AuthLayout } from './modules/shared/auth-layout/auth-layout';
import { Home } from './modules/home/home';
import {DocumentUploadComponent} from './modules/document-upload/document-upload';
import {VerificationHistory} from './modules/verification-history/verification-history';
import {VerificationDetails} from './modules/verification-details/verification-details';

export const routes: Routes = [

  // --- PUBLIC/AUTH ROUTES ---
  {
    path: '',
    component: Home, // Assuming Home is the public landing or redirects to login
  },
  {
    path: 'auth-layout', // Use this route for login, register, etc.
    component: AuthLayout,
  },

  // --- PROTECTED ROUTES (Using MainLayout) ---
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        // 🚨 FIX 1: Add this redirect to make '/ ' land on the dashboard
        path: '',
        redirectTo: 'workflow-management',
        pathMatch: 'full'
      },
      {
        path: 'workflow-management',
        // CORRECT: All workflow routes are handled here via lazy loading.
        loadChildren: () => import('./modules/workflow-management/workflow-management-module').then((m) => m.WorkflowManagementModule),
      },
      {
        path: 'document-upload',
        // CORRECT: If document-upload is not a lazy module, define it here.
        // If it should be lazy loaded, use loadChildren instead of component.
        component: DocumentUploadComponent,
      },
      {
        path: 'verification-history',
        component: VerificationHistory,
      },
      {
        path: 'verification-details/:id',
        component: VerificationDetails,
      },
      // You don't need 'main-layout' as a child path of 'MainLayoutComponent'.
      // You don't need 'flow-designer' here as it's lazy-loaded below.
    ],
  },

  // --- WILDCARD/FALLBACK ROUTES ---
  // Use a login redirect and a simple 404 handler.
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' } // Assuming 'login' is a route in AuthLayout
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
