import {Component} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent {

constructor(private authService: AuthService, private router: Router) {}

getAuthService() {
  return this.authService;
}

logout() {
  this.authService.logout();
  this.router.navigate(['/login']); 
}
}
