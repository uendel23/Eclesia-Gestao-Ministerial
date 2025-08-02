import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule, RouterOutlet,MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
