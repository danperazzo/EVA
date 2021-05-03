import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, map } from "rxjs/operators";

import { Occurrence, Institution } from "../../../common/models";


@Injectable()
export class OccurrenceService {
  
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  private serverURL = "http://localhost:3333";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  

  constructor(private http: HttpClient) {}

  addOccurrence(occurence: Occurrence): void {}
  showLocationOnMap(institution: Institution): void {}
  postOccurrence(occurrence: Occurrence){

    return this.http.post<Occurrence>(this.serverURL + "/occurrence/postOccurrence", occurrence)
             .toPromise()
             .then(res => res)
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de ocorrências',erro);
    return Promise.reject(erro.message || erro);
  }
  
}
