import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  name = '';
  city = '';
  mapsURL = `https://maps.google.com/maps?q=recife&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  constructor(private _Activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      let address: any = params.get('address');

      address = address?.split('&').join('%20');

      this.mapsURL = `https://maps.google.com/maps?q=${address}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    });
  }
}
