import { Component, Input, Output, EventEmitter } from '@angular/core'

interface HobbyObject {
    id?: number;
    name?: string;
}

@Component({
    selector: 'app-hobby',
    template: `
    <li 
        (click)="onHobbyClicked()">
        {{ hobby.name }}
    </li>
    `
})

export class Hobby {
    @Input() hobby: HobbyObject
    @Output() hobbyClicked = new EventEmitter<HobbyObject>()

    onHobbyClicked() {
        this.hobbyClicked.emit(this.hobby)
    }
}