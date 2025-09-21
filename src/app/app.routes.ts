import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './core/auth_guard/auth-guard';
import {MailLayout} from './components/shared/mail-layout/mail-layout';
import {AuthLayout} from './components/shared/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', loadComponent: () => import('./components/auth/login/login').then(m => m.Login) },
      { path: 'signup', loadComponent: () => import('./components/auth/signup/signup').then(m => m.Signup) }
    ]
  },
  {
    path: '',
    component: MailLayout,
    canActivate: [AuthGuard],
    children: [
      { path: 'mail', loadComponent: () => import('./components/messages/mail/mail').then(m => m.Mail) },
      { path: 'inbox', loadComponent: () => import('./components/messages/inbox/inbox').then(m => m.Inbox) },
      { path: 'trash', loadComponent: () => import('./components/messages/trash/trash').then(m => m.Trash) },
      { path: 'sent', loadComponent: () => import('./components/messages/sent/sent').then(m => m.Sent) },
      { path: 'home', loadComponent: () => import('./components/shared/home/home').then(m => m.Home) }
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
