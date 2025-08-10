import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Home } from "../home/home";
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule,
     RouterOutlet,
     RouterLink,
     MatIconModule,
     Home,
     Footer,
    ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
