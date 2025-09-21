import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-mail-layout',
  imports: [
    Sidebar,
    RouterOutlet
  ],
  templateUrl: './mail-layout.html',
  styleUrl: './mail-layout.scss'
})
export class MailLayout {

}
