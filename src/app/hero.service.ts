import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({ // Class participates in dependency injection system
  providedIn: 'root' // Metadata object
  // creates single shared instance of the service, and injects to any class that asks for it.
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
  return heroes;
  }

  constructor() { }
}
