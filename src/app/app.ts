import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {Header} from './modules/shared/header/header';
import {Sidebar} from './modules/shared/sidebar/sidebar';
// import {Home} from './components/shared/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-angular');
}
