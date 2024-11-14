import {Component} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
    selector: 'app-public-menu',
    standalone: true,
    imports: [
        HighlightDirective,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
menuColor: string = 'grey';
}