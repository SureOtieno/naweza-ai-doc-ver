import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-section',
  imports: [
    RouterLink
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
  animations: [
    // This is the trigger you apply to the element in the HTML: [@fadeInUp]
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms 300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    // Use separate triggers for staggered or delayed effects
    trigger('fadeInUpDelay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms 600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInDelay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class HeroSection {

}

