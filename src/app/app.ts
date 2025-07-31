import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Dashboard } from "./dashboard/dashboard";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Eclesia-gestao-ministerial');
}
