import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstitutionsService } from '../institution.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  name = '';
  city = '';
  mapsURL = `https://maps.google.com/maps?q=recife&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private institutions: InstitutionsService
  ) {}

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe((params) => {
      let id: any = params.get('id');
      console.log(this.institutions.show());
      this.mapsURL = `https://maps.google.com/maps?q=${id}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    });
  }
}
