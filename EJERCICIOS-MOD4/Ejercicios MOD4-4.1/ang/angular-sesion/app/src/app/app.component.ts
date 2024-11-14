import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './layout/public-menu/public-menu.component';
import { SearchComponent } from './layout/search/search.component';
// import { UserListComponent } from './user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, MenuComponent, NgFor], //UserListComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';

  // writeLog($event: string){
  //   console.log('click en lupa detectado');
  //   console.log($event);
  // }
}

// para crear un nuevo componente: npx ng g(generate) c(component) nombreCarpeta/nombreComponente --> npx ng g c user/user-list
