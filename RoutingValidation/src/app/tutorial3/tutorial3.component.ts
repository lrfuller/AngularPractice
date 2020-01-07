import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-tutorial3',
  templateUrl: './tutorial3.component.html',
  styleUrls: ['./tutorial3.component.css']
})
export class Tutorial3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() hero: Hero;

}
