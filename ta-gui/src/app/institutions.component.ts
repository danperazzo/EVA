import { Component, OnInit } from '@angular/core';
import { AdminServices } from './admin.service';
import { Institution, Address } from '../../../common/models';
import './userWithoutOcurrence.service';

  @Component({
   selector: 'institutions',
   templateUrl: './institutions.component.html',
   styleUrls: ['./institutions.component.css']
 })
export class InstitutionsComponent implements OnInit {
  institutions: Institution[] = [];
   
  constructor(private adminService: AdminServices) {}

  addInstitution(institution : Institution ){}
  deleteInstitution(institution : Institution){}

  filterInstitutionsByType(type : string) {}
  filterInstitutionByAddress(address:Address) {}
  filterInstitutionByName(name:string) {}

  showLocationOnMap(institution : Institution){}
   
  ngOnInit(): void {}  
}