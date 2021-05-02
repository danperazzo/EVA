import { Component, OnInit } from '@angular/core';

import { AdminServices } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  activeIndex: number = 0;
  rangeDates: Date[] = [new Date(), new Date()];
  occurrencesFiltered = [];
  occurrencesQtyPerUrgency = [];
  labels = [];
  values = [];
  pieData: any;
  
  constructor(private adminServices: AdminServices) {}

  countOccurrencesByUrgencyInDateRange(){

    let dateStart = this.rangeDates[0].toISOString().split("T")[0];
    let dateEnd = this.rangeDates[1].toISOString().split("T")[0];

    console.log("date star = " + dateStart);

    this.adminServices.countOccurrencesByUrgencyInDateRange(dateStart, dateEnd).then(response => {
      this.occurrencesQtyPerUrgency = response;

      console.log("this.occurrencesQtyPerUrgency =" + JSON.stringify(this.occurrencesQtyPerUrgency));
      this.labels = [];
      this.values = [];
      for (let i = 0; i < this.occurrencesQtyPerUrgency.length; i++) {
        this.labels[i] = this.occurrencesQtyPerUrgency[i]["_id"];
        this.values[i] = this.occurrencesQtyPerUrgency[i]["countOccurrences"];
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
    this.countOccurrencesByUrgencyInDateRange();
  }

}
