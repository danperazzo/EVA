import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, map } from "rxjs/operators";

import { Occurrence, Institution } from "../../../common/models";

@Injectable()
export class OccurrenceService {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  private taURL = "http://localhost:3000/occurrences";

  constructor(private http: HttpClient) {}

  filterInstitutions(occurrence: Occurrence): void {}
  addOccurrence(occurence: Occurrence): void {}
  showLocationOnMap(institution: Institution): void {}
}
