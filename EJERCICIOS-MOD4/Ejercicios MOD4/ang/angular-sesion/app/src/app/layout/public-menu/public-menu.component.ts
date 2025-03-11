import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-public-menu',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule,
    ],
    templateUrl: './public-menu.component.html',
    styleUrls: ['./public-menu.component.scss']
})

export class PublicMenuComponent implements OnInit {
    constructor(public authService: AuthService) { }
  
    ngOnInit(): void {
    }
  }