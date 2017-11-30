import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentId = 0
  @Input() newName = ''
  hobbyDeleted = false
  hobbies = [
    {
      id: this.idPlus(),
      name: 'Play Guitar'
    },
    {
      id: this.idPlus(),
      name: 'Sport'
    },
    {
      id: this.idPlus(),
      name: 'Reading'
    }
  ]
  
  idPlus() {
    return ++this.currentId
  }

  addHobby() {
    this.hobbies.push({
      id: this.idPlus(),
      name: this.newName
    })
  }

  removeHobby(hobby) {
    for(var i = 0; i < this.hobbies.length; i++) {
      if(hobby.id === this.hobbies[i].id) {
        this.hobbies.splice(i, 1)
        this.hobbyDeleted = true
        break
      }
    }
  }
}
