import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { OccurrenceService } from '../occurrence.service';

//import { AdminServices } from "../admin.service";
import {
  Institution,
  Address,
  InstitutionType,
  Occurrence,
} from '../../../../common/models';

@Component({
  selector: 'app-occurrences',
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.css'],
})
export class OccurrencesComponent implements OnInit {
  needsPsyHelp: boolean = true;
  needsMedHelp: boolean = false;
  needsSecHelp: boolean = false;
  dateOccurrence: Date = new Date();
  urgLevel: number;
  location: string;
  filteredInst: Institution[] = [];

  constructor(private occurrenceService: OccurrenceService) {
    this.needsPsyHelp = true;
    this.needsMedHelp = false;
    this.needsSecHelp = false;
    this.dateOccurrence = new Date();
    this.urgLevel = 2;
    this.location = 'Recife';
  }

  ngOnInit(): void {}

  addOccurrence(occurence: Occurrence) {}

  countOccurrencesByYear(year: number) {}
  filterOccurrenceByDateRange(from: Date, to: Date) {}
  filterOcurrencesByUrgencyLevel(urgencyLevel: number) {}

  postOccurrence() {
    var occurrence = new Occurrence(
      this.dateOccurrence,
      this.needsMedHelp,
      this.needsSecHelp,
      this.needsPsyHelp,
      this.urgLevel,
      this.location
    );
    console.log(occurrence);

    this.occurrenceService
      .postOccurrence(occurrence)
      .then((response) => {
        this.filteredInst = response.map((institution: any) => {
          const addressString = `${institution.address.street} ${institution.address.number}, ${institution.address.city}`;
          const mapsUrl = `maps/${institution._id}`;
          return { ...institution, addressString, mapsUrl };
        });

        console.log(this.filteredInst);
      })
      .catch((erro) => alert(erro));
  }
}
