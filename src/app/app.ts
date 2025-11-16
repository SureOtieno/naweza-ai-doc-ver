import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {Header} from './modules/shared/header/header';
import {SidebarComponent} from './modules/shared/components/sidebar/sidebar';
// import {Home} from './components/shared/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-angular');
}
