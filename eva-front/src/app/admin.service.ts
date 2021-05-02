import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, map } from "rxjs/operators";

import { Occurrence } from "../../../common/models";

// import OccurrencesController from "../../../eva-server/src/app/controllers/OccurrencesController";

@Injectable()
export class AdminServices {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  private serverURL = "http://localhost:3333";

  // private server = OccurrencesController;

  constructor(private http: HttpClient) {
    // this.server = OccurrencesController;
  }

  // countOccurrencesByUrgencyInDate(year: number): Observable<Occurrence[]>{
  //   let param = new HttpParams().set("yearFilter", year.toString());
  //   return this.http.get<any>(this.serverURL + "/occurrences/countByUrgencyInDate", {headers: this.headers, params: param})
  //            .pipe( 
  //               retry(2)
  //             ); 
  // };

  countOccurrencesByUrgencyInDate(date: string) {
    let param = new HttpParams().set("dateFilter", date);
    console.log("param =" + param); 
    return this.http.get(this.serverURL + "/occurrences/countByUrgencyInDate", {headers: this.headers, params: param})
             .toPromise()
             .then(res => res)
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de ocorrências',erro);
    return Promise.reject(erro.message || erro);
  }

  filterOccurrenceByDateRange(from: Date, to: Date) {}
  filterOcurrencesByUrgencyLevel(urgencyLevel: number) {}


  // addInstitution(institution: Institution): void {
  //   // TODO
  // }
  // deleteInstitution(
  //   institutionList: Institution[],
  //   institutionName: string
  // ): void {
  //   // TODO
  // }

  /*
  criar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<any>(this.taURL + "/aluno", aluno, {headers: this.headers})
             .pipe( 
                retry(2),
                map( res => {if (res.success) {return aluno;} else {return null;}} )
              ); 
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.http.put<any>(this.taURL + "/aluno",JSON.stringify(aluno), {headers: this.headers})          .pipe( 
                retry(2),
                map( res => {if (res.success) {return aluno;} else {return null;}} )
              ); 
  }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.taURL + "/alunos")
              .pipe(
                 retry(2)
               );
  }
  */
}
