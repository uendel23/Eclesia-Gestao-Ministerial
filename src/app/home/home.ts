import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',

})
export class Home {

}
