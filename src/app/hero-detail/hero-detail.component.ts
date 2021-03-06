import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'; 
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroes: Hero[] = [];

  @Input() hero?: Hero; // Make hero property available from binding
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); //Getting the id from the url
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  ngOnInit(): void {
    this.getHero();
  }

}
