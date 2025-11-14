import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './core/auth_guard/auth-guard';
import {MailLayout} from './modules/shared/mail-layout/mail-layout';

export const routes: Routes = [
  {
    path: 'layout',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./modules/layout/layout-module').then((m) => m.LayoutModule),
  },
  // {
  //   path: '',
  //   component: AuthLayout,
  //   children: [
  //     { path: 'login', loadComponent: () => import('./modules/auth/login/login').then(m => m.Login) },
  //     { path: 'signup', loadComponent: () => import('./modules/auth/signup/signup').then(m => m.Signup) }
  //   ]
  // },
  {
    path: '',
    component: MailLayout,
    // canActivate: [AuthGuard],
    children: [
      // { path: 'mail', loadComponent: () => import('./modules/messages/mail/mail').then(m => m.MailComponent) },
      // { path: 'inbox', loadComponent: () => import('./modules/messages/inbox/inbox').then(m => m.Inbox) },
      // { path: 'trash', loadComponent: () => import('./modules/messages/trash/trash').then(m => m.Trash) },
      // { path: 'sent', loadComponent: () => import('./modules/messages/sent/sent').then(m => m.Sent) },
      { path: '', loadComponent: () => import('./modules/home/home').then(m => m.Home) }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule {}
