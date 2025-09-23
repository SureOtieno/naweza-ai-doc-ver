import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-auth-layout',
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss'
})
export class AuthLayout {

}
