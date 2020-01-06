import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles = [
    {
      name: 'Twingo',
      power: 60,
      color: 'red',
      description: 'A perfect citadine'
    },
    {
      name: 'DS5',
      power: 150,
      color: 'yellow',
      description: 'A dad car'
    },
    {
      name: 'H2',
      power: 300,
      color: 'grey',
      description: 'The american dream'
    },
    {
      name: 'Punto',
      power: 70,
      color: 'blue',
      description: 'My first car'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}