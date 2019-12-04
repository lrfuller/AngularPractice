import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  
  constructor() {
    this.hero = new Hero();
    this.createHero();
  }

  ngOnInit() {
  }

  createHero(){
    this.hero.id = 1;
    this.hero.name = "Windstorm";
  }

}
