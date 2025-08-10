import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet , RouterLink} from "@angular/router";


@Component({
  selector: 'app-home',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',

})
export class Home {
  goTo(page: string) {
  console.log('Navegar para:', page);
  // Aqui navegue com Angular Router se quiser:
  // this.router.navigate([page]);
}

logout() {
  console.log('Fazer logout');
  // Coloque sua lógica de logout aqui
}

}
