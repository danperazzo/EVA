import { Component, OnInit } from '@angular/core';
import { AdminServices } from './admin.service';
import { Institution } from '../../../common/models';
import './userWithoutOcurrence.service';

  @Component({
   selector: 'institutions',
   templateUrl: './institutions.component.html',
   styleUrls: ['./institutions.component.css']
 })
export class InstitutionsComponent implements OnInit {
  institutions: Institution[] = [];
   
  constructor(private adminService: AdminServices) {}
   
  ngOnInit(): void {}  
}