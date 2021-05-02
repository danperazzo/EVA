import { Component, OnInit } from '@angular/core';

import { Occurrence } from  "../../../../common/models";
import { AdminServices } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  constructor(private adminServices: AdminServices) {}

  activeIndex: number = 0;
  dateFilter: string = "2021-02-10";
  occurrenceList: Occurrence[] = [];

  countOccurrencesByUrgencyInDate(date: string){
    this.adminServices.countOccurrencesByUrgencyInDate(this.dateFilter).then(response => {
      const json = JSON.stringify(response);
    console.log(json);
  });
  }

  ngOnInit(): void {
    
  }

}
