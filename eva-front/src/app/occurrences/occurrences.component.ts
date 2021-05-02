import { Component, OnInit } from '@angular/core';
import {Occurrence, Institution} from '../../../../common/models'

@Component({
  selector: 'app-occurrences',
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.css']
})
export class OccurrencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addOccurrence(occurence: Occurrence) {}

  countOccurrencesByYear(year: number) {}
  filterOccurrenceByDateRange(from: Date, to: Date) {}
  filterOcurrencesByUrgencyLevel(urgencyLevel: number) {}

}
