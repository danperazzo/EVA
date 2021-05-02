import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import {CheckboxModule} from 'primeng/checkbox';
import {OccurrenceService} from '../occurrence.service'


//import { AdminServices } from "../admin.service";
import {
  Institution,
  Address,
  InstitutionType,
  Occurrence,
} from "../../../../common/models";

@Component({
  selector: "institutions",
  templateUrl: "./institutions.component.html",
  styleUrls: ["./institutions.component.css"],
})
export class InstitutionsComponent implements OnInit {
  
  institutions: Institution[] = [];

  needsPsyHelp: boolean = false;
  needsMedHelp:boolean = false;
  needsSecHelp:boolean = false;
  dateOccurrence: Date = new Date();
  urgLevel:number = 2;
  location:string = "";
  


  constructor(private occurrenceService: OccurrenceService) {}

  addInstitution(institution: Institution): Institution {
    return new Institution(
      "Hospital das Freiras",
      "hospitaldasfreiras@gmail.com",
      "8199999912",
      "medico",
      "Rua falsa",
      "123",
      "123654-3",
      "Recife"
    );
  }

  deleteInstitution(
    institutionList: Institution[],
    institutionName: string
  ): void {
    institutionList.filter(
      (institution: Institution) => institution.name !== institutionName
    );
  }

  filterInstitutionsByType(type: InstitutionType): Institution[] {
    return this.institutions.filter(
      (institution: Institution) => institution.type === type
    );
  }

  filterInstitutionByAddress(address: Address) {
    const compareAddress = (a: Address, b: Address) => {
      return (
        a.number === b.number &&
        a.postalCode === b.postalCode &&
        a.street &&
        b.street
      );
    };
    return this.institutions.filter((institution: Institution) =>
      compareAddress(institution.address, address)
    );
  }

  filterInstitutionByName(name: string) {
    return this.institutions.filter(
      (institution: Institution) => institution.name === name
    );
  }

  showLocationOnMap(institution: Institution) {}

  ngOnInit(): void {}


  filterInstitutions(){
    


    


  }
}
