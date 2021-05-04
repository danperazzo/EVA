import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserWithoutOcurrence } from '../user-without-ocurrence.service';

import {
  Institution,
  InstitutionType,
} from '../../../../common/models';


@Component({
  selector: 'institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})


export class InstitutionsComponent implements OnInit {

  institutions: Institution[] = [];
  receivedInstitutions: Institution[] = [];
  selectedCity: any = null;
  institutionName: string =  "";
  checkedFilter: boolean = false;
  

  citys: any[] = [
    {name: 'Nenhuma selecionada', code: 'None'},
    {name: 'Recife', code: 'Recife'},
    {name: 'Jaboatao', value: 'Jaboatao dos Guararapes'},
    {name: 'Olinda', code: 'Olinda'},
    {name: 'Paulista', code: 'Paulista'}
  ];

  addInstitution(institution: Institution): Institution {
    return new Institution(
      'Hospital das Freiras',
      'hospitaldasfreiras@gmail.com',
      '8199999912',
      'medico',
      'Rua falsa',
      '123',
      '123654-3',
      'Recife'
    );
  } 

  filterInstitutionsByType(type: InstitutionType): Institution[] {
    return this.institutions.filter(
      (institution: Institution) => institution.type === type
    );
  }

  constructor(private userWithoutOccurenceService: UserWithoutOcurrence) {
    this.institutionName;
    this.selectedCity;
    this.receivedInstitutions = [];
  }  

  filterInstitutionByNameByCity(){
    let nameInstitution = this.institutionName;
    let cityName = this.selectedCity.name;

    this.userWithoutOccurenceService
      .filterInstitutionByNameByCity(nameInstitution, cityName)
      .then((response) => {

        for(let i=0; i<response.institutions.length; i++){
          this.institutions[i] = response.institutions[i];
          console.log(this.institutions[i]);
          this.receivedInstitutions[i] = this.institutions[i];
          console.log(this.receivedInstitutions[i]);
        }
        
      });
  }

  filterInstitutionByName() {
    let nameInstitution = this.institutionName;

    this.userWithoutOccurenceService
      .filterInstitutionByName(nameInstitution)
      .then((response) => {

        for(let i=0; i<response.institutions.length; i++){
          this.institutions[i] = response.institutions[i];
          this.receivedInstitutions[i] = this.institutions[i];
        }
       
      });
  } 

  showLocationOnMap(institution: Institution) {}

  handleChange(e:any) {
    let isChecked = e.checked; 
  
    if(isChecked == true){
      if(this.selectedCity == null){
        this.filterInstitutionByName();
      }
      else{
        if(this.selectedCity.name == 'Nenhuma selecionada' ){
          this.filterInstitutionByName();
        }else{
          this.filterInstitutionByNameByCity();
        }
      }
    }
    else{
        console.log("Is checked?",isChecked);
  
      }
  } 
    

  ngOnInit(): void {
    this.handleChange;
  }

  
}
