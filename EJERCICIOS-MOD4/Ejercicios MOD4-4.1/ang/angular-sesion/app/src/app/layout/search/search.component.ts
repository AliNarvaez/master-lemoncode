import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss'
})
export class SearchComponent {
    @Input() ph = 'placeholder';
    @Input() label = 'buscar'

    name = 'Joe';
    updatedName = 'Ramon';

    @Output() clickEnLupa: EventEmitter<string> = new EventEmitter<string>();

    myFunction() {
        console.log(this.updatedName);
       this.name = this.updatedName;
    }

    nameUpdated($event: any) {
        this.updatedName = $event.target.value;
    }

    resetName(){
        this.updatedName = '';
        this.name = '';
    }

    clickEvent() {
        console.log("click en lupa");
        this.clickEnLupa.emit("evento custom desde el search");
    }

}