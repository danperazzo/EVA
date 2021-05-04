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
  needsPsyHelp: boolean;
  needsMedHelp: boolean;
  needsSecHelp: boolean;
  dateOccurrence: Date;
  urgLevel: number;
  location: string;
  filteredInst= [];

  constructor(private occurrenceService: OccurrenceService) {
    this.needsPsyHelp = false;
    this.needsMedHelp = false;
    this.needsSecHelp = false;
    this.dateOccurrence = new Date();
    this.urgLevel = 2;
    this.location = '';
  }

  ngOnInit(): void {}
  
  postOccurrence() {
    var occurrence = new Occurrence(
      this.dateOccurrence,
      this.needsMedHelp,
      this.needsSecHelp,
      this.needsPsyHelp,
      this.urgLevel,
      this.location
    );

    this.occurrenceService
      .postOccurrence(occurrence)
      .then((response) => {
        this.filteredInst = response.map((institution: any) => {
          const addressString = `${institution.address.street} ${institution.address.number}, ${institution.address.city}`;
          const mapsUrl = `maps/${institution._id}`;
          return { ...institution, addressString, mapsUrl };
        });

      })
      .catch((erro) => alert(erro));
  }
}
