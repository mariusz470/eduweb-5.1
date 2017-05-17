import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tydzień 5 Zadanie 1';
  answer = "Lepiej jest użyć ngClass, gdy nie przypisujemy klasie wartości związanych. Natomiast ngStyle wtedy gdy chcemy użyć wartości związanych";

  selected = null;

  playlist = {
    name: 'The best of EduWeb!',
    tracks: 23,
    color: '#FF0000',
    favourite: true,
  }

  save(event){
    console.log('Zapisano', event)
  }
  
  constructor(){

  }

}
