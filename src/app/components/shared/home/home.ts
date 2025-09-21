import {Component, signal} from '@angular/core';
import {Card} from '../card/card';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {Sidebar} from '../sidebar/sidebar';
import {Mail} from '../../messages/mail/mail';
import {Inbox} from '../../messages/inbox/inbox';

@Component({
  selector: 'app-home',
  imports: [
    Card,
    AngularSvgIconModule,
    Sidebar,
    Mail,
    Inbox
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
title = signal<string | null>("The Demo Mailing App");
}
