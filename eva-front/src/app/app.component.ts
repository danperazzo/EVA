import { getLocaleId } from '@angular/common';
import { Component } from '@angular/core';

import { PrimeNGConfig, SelectItemGroup, MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api'; //required when using MegaMenu
import { FormBuilder } from '@angular/forms';
import {
  Institution,
  Address,
  InstitutionType,
  Occurrence,
} from '../../../common/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mapsUrl: string = '/maps/hospital&das&clinicas';
  items: MenuItem[] = [];

  institutions: Institution[] = [];
  ocurrenceForm = this.formBuilder.group({
    location: '',
    urgencyLevel: '',
  });

  occurrence: Occurrence = new Occurrence(new Date(), true, true, true, 0, '');

  //  constructor(private adminService: AdminServices) {}
  constructor(private formBuilder: FormBuilder) {}

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

  findInstitution() {
    console.log('Procurandooo');
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'Filters',
        icon: 'pi pi-fw pi-filter',
      },
    ];
  }
}
