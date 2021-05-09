import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({ // Decorator that marks class as Angular component
  selector: 'app-heroes', // CSS Selector
  templateUrl: './heroes.component.html', // location of template file
  styleUrls: ['./heroes.component.css']  // location of private CSS 
}) 
export class HeroesComponent implements OnInit {
  heroes = HEROES; // Component property

  selectedHero?: Hero;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }


  constructor() { }

  ngOnInit(): void { // Lifecycle hook, called after component creation. Used for initialization logic
  }

}
