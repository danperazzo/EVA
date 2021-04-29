import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  positionMap = {
    name: 'Hospital das clínicas',
    street: 'Av prof moraes rego',
    num: '1235',
    city: 'Recife',
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.name}%20${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  constructor() {}

  ngOnInit(): void {}
}
