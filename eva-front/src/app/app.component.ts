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
} from "../../../common/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
],
})
export class AppComponent {
  mapsUrl: string = '/maps/hospital&das&clinicas';
  items: MenuItem[] =[];

  institutions: Institution[] = [];
  ocurrenceForm = this.formBuilder.group({
    location: '',
    urgencyLevel: ''
  });

  

  occurrence: Occurrence = new Occurrence(new Date(),
                                          true,
                                          true,
                                          true,
                                          0,
                                          "");

//  constructor(private adminService: AdminServices) {}
  constructor(private formBuilder: FormBuilder,) {}

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

  findInstitution(){

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
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
