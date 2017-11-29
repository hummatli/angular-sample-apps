import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sattar'
  elements: number[] = []

  onChangeName() {
    this.name = "Ali" 
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1)
  }

  getColor(element) {
    return element % 2 === 0 ? 'green' : 'red' 
  }

  onUserWasClicked(usrName: string) {
    alert(usrName)
  }
}
