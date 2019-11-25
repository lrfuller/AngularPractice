import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
  styleUrls: ['./displaying-data.component.css']
})
export class DisplayingDataComponent implements OnInit {

  myHero1 = 'My Hero';
  myHero2 = 'Acedamia';

  public code1;
  public code2;

  title = 'Characters';
  characters = ['Lelouch', 'Nanaly', 'Suzaku', 'Bakugo']
  myCharacter = this.characters[0];

  characters2=[
    new Hero(1, 'Suzaku'),
    new Hero(2, 'C2')
  ];
  myCharacter2 = this.characters2[0];

  




  constructor() {    
    this.code1 = 'Code';
    this.code2 = 'Geass';
   }

  ngOnInit() {
  }



}
