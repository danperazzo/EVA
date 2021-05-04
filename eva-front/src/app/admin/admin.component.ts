import { Component, OnInit } from '@angular/core';

import { AdminServices } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  index: number = 0;
  
  yearFilter: string = "";
  startDate: Date = new Date();
  endDate: Date = new Date();

  occurrencesFiltered = [];
  occurrencesQtyPerType: any;
  occurrencesQtyPerUrgency = [];

  pieChart: any;
  labels = [];
  values = [];

  constructor(private adminServices: AdminServices) {
    let today = new Date();
    let month = today.getMonth();

    this.startDate.setDate(1);
    this.startDate.setHours(0);

    this.endDate.setMonth(month + 1);
    this.endDate.setDate(0);
    this.endDate.setHours(23);
  }

  handleChange(e:any) {
    this.index = e.index;
    let defaultQtyPerType = [{countMedOccurrences:'-', countPsyOccurrences:'-', countSecOccurrences:'-'}];
    if (this.index == 1){
      this.occurrencesQtyPerType = defaultQtyPerType;
    }
    else {
      this.updateMonthViews();
    }
  }

  countOccurrencesByUrgencyInDateRange(dateStart: string, dateEnd: string) {
    this.adminServices
      .countOccurrencesByUrgencyInDateRange(dateStart, dateEnd)
      .then((response) => {
        this.occurrencesQtyPerUrgency = response;
        this.updateChart();
      }); 
  }

  filterOccurrenceByDateRange(dateStart: string, dateEnd: string) {
    this.adminServices
      .filterOccurrenceByDateRange(dateStart, dateEnd)
      .then((response) => {
        this.occurrencesFiltered = response;
      });
  }

  countOccurrencesByTypeInYear(){
    this.adminServices
      .countOccurrencesByTypeInYear(this.yearFilter)
      .then((response) => {
        this.occurrencesQtyPerType = response;
      });
    
  }

  updateChart(){
    this.labels = [];
    this.values = [];
    for (let i = 0; i < this.occurrencesQtyPerUrgency.length; i++) {
      this.labels[i] = this.occurrencesQtyPerUrgency[i]['_id'];
      this.values[i] = this.occurrencesQtyPerUrgency[i]['countOccurrences'];
    }

    this.pieChart = {
      labels: this.labels,
      datasets: [
        {
          data: this.values,
          backgroundColor: [
            '#d892a4',
            '#d892c6',
            '#9e80bc',
            '#837fbc',
            '#8a98c1',
          ],
          hoverBackgroundColor: [
            '#e4b4c0',
            '#e4b4d8',
            '#8a98c1',
            '#9e9bca',
            '#abb5d3',
          ],
        },
      ],
    };
  }

  updateMonthViews() {
    let dateStart = (this.startDate as Date).toISOString().split('T')[0];
    let dateEnd = (this.endDate as Date).toISOString().split('T')[0];

    this.countOccurrencesByUrgencyInDateRange(dateStart, dateEnd);
    this.filterOccurrenceByDateRange(dateStart, dateEnd);
  }

  updateYearViews(){
    this.countOccurrencesByTypeInYear();
  }

  ngOnInit(): void {
    this.updateMonthViews();
  }
}
