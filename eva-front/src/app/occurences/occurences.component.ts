import { Component, OnInit } from '@angular/core';
import {Occurrence, Institution} from '../../../../common/models'

@Component({
  selector: 'app-occurences',
  templateUrl: './occurences.component.html',
  styleUrls: ['./occurences.component.css']
})
export class OccurencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  findInstitutions(occurrence: Occurrence): void {}
  addOccurrence(occurence: Occurrence): void {}
  showLocationOnMap(institution: Institution): void {}

}
