import {Component, signal} from '@angular/core';
import {Card} from '../shared/card/card';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {Sidebar} from '../shared/sidebar/sidebar';
import {MailComponent} from '../messages/mail/mail';
import {Inbox} from '../messages/inbox/inbox';
import {CtaBar} from './pages/cta-bar/cta-bar';
import {FeaturesShowcase} from './pages/features-showcase/features-showcase';
import {HeroSection} from './pages/hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [
    Card,
    AngularSvgIconModule,
    Sidebar,
    MailComponent,
    Inbox,
    CtaBar,
    FeaturesShowcase,
    HeroSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
title = signal<string | null>("The Demo Mailing App");
}
