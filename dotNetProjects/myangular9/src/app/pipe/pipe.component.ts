import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  employees: any[]

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {name: 'Bill', address: 'Virginia', salary: 50000, joining: new Date()},
      {name: 'Bob', address: 'West Virginia', salary: 51000, joining: new Date()},
      {name: 'Joe', address: 'North Carolina', salary: 53000, joining: new Date()}
    ]
  }

}
