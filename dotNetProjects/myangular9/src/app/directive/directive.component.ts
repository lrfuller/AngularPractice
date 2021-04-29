import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  num: number;
  alphabet: string;
  colors: any[];
  color: string;


  array1 = ["Testing", "NgFor", "Looping", "Array"]
  arrayObj: Array<Object> = [
    {
      "id": 1,
      "testing": "object 1",  
    },
    {
      "id": 2,
      "testing": "object 2"
    }
  ]

  constructor() {
    this.num = 1;
    this.colors=["red", "blue", "green"];
    this.color="white";
  }

  ngOnInit(): void {
  }

}
