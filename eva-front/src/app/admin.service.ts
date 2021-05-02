import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable()
export class AdminServices {
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  private serverURL = "http://localhost:3333";


  constructor(private http: HttpClient) {}


  countOccurrencesByUrgencyInDate(date: string) {
    let param = new HttpParams().set("dateFilter", date);
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

}
