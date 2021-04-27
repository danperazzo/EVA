import { Component, OnInit } from "@angular/core";
import { AdminServices } from "../admin.service";
import { Occurrence } from "../../../../common/models";

@Component({
  selector: "occurrences",
  templateUrl: "./occurrences.component.html",
  styleUrls: ["./occurrences.component.css"],
})
export class OccurrencesComponent implements OnInit {
  occurrences: Occurrence[] = [];
  cpfduplicado: boolean = false;

  constructor(private adminService: AdminServices) {}

  addOccurrence(occurence: Occurrence) {}

  filterOccurrencesByYear(year: number) {}
  filterOccurrenceByDateRange(from: Date, to: Date) {}
  filterOcurrencesByUrgencyLevel(urgencyLevel: number) {}

  ngOnInit(): void {}
}
