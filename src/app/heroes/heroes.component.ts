import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({ // Decorator that marks class as Angular component
  selector: 'app-heroes', // CSS Selector
  templateUrl: './heroes.component.html', // location of template file
  styleUrls: ['./heroes.component.css']  // location of private CSS 
}) 
export class HeroesComponent implements OnInit {
 // heroes = HEROES; // Component property

  selectedHero?: Hero;

  heroes:Hero[] = [];



  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void { // Lifecycle hook, called after component creation. Used for initialization logic
    this.getHeroes(); 
  }
  /**
   * Fills our heroes with the HeroService method
   */
  getHeroes():void{ 
    this.heroService.getHeroes()
      .subscribe(heroes=>this.heroes = heroes);
  }
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`);
  }

}
