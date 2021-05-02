import { Component, OnInit } from '@angular/core';

import { AdminServices } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  activeIndex: number = 0;
  dateFilter: string = "2021-02-10";
  occurrenceList = [];
  labels = [];
  values = [];
  pieData: any;
  
  constructor(private adminServices: AdminServices) {}

  countOccurrencesByUrgencyInDate(date: string){

    this.adminServices.countOccurrencesByUrgencyInDate(this.dateFilter).then(response => {
      this.occurrenceList = response;

      this.labels = [];
      this.values = [];
      for (let i = 0; i < this.occurrenceList.length; i++) {
        this.labels[i] = this.occurrenceList[i]["_id"];
        this.values[i] = this.occurrenceList[i]["countOccurrences"];
      }
  
      this.pieData = {
        labels: this.labels,
        datasets: [
            {
                data:  this.values,
                backgroundColor: [
                    "#d892a4",
                    "#d892c6",
                    "#9e80bc",                  
                    "#837fbc",
                    "#8a98c1",
                ],
                hoverBackgroundColor: [
                    "#e4b4c0",
                    "#e4b4d8",
                    "#8a98c1",                  
                    "#9e9bca",
                    "#abb5d3",
                ]
            }]
      };      
    });
  }

  ngOnInit(): void {
    this.countOccurrencesByUrgencyInDate(this.dateFilter);
  }
}
