import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ // Class participates in dependency injection system
  providedIn: 'root' // Metadata object
  // creates single shared instance of the service, and injects to any class that asks for it.
})
export class HeroService {

  /**
   * Uses Rxjs of() 
   * @returns Observable of heroes
   */
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    // Note no error handling
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  //Injects the MessageService
  constructor(private messageService: MessageService) { }
}
