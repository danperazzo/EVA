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
  labels = [];
  values = [];
  pieData: any;

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

  countOccurrencesByUrgencyInDateRange() {
    let dateStart = (this.startDate as Date).toISOString().split('T')[0];
    let dateEnd = (this.endDate as Date).toISOString().split('T')[0];

    this.adminServices
      .countOccurrencesByUrgencyInDateRange(dateStart, dateEnd)
      .then((response) => {
        this.occurrencesQtyPerUrgency = response;

        this.labels = [];
        this.values = [];
        for (let i = 0; i < this.occurrencesQtyPerUrgency.length; i++) {
          this.labels[i] = this.occurrencesQtyPerUrgency[i]['_id'];
          this.values[i] = this.occurrencesQtyPerUrgency[i]['countOccurrences'];
        }

        this.pieData = {
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
      });
  }

  filterOccurrenceByDateRange() {
    let dateStart = (this.startDate as Date).toISOString().split('T')[0];
    let dateEnd = (this.endDate as Date).toISOString().split('T')[0];

    this.adminServices
      .filterOccurrenceByDateRange(dateStart, dateEnd)
      .then((response) => {
        this.occurrencesFiltered = response;
        console.log(
          'occurrences ->>>',
          this.occurrencesFiltered,
          dateStart,
          dateEnd
        );
      });
  }

  countOccurrencesByTypeInYear(){
    this.adminServices
      .countOccurrencesByTypeInYear(this.yearFilter)
      .then((response) => {
        this.occurrencesQtyPerType = response;
        console.log(
          'occurrences ->>>',
          this.occurrencesQtyPerType,
          this.yearFilter)
      });
    
  }

  updateMonthViews() {
    this.countOccurrencesByUrgencyInDateRange();
    this.filterOccurrenceByDateRange();
  }

  updateYearViews(){
    this.countOccurrencesByTypeInYear();
  }

  ngOnInit(): void {
    this.updateMonthViews();
  }
}
