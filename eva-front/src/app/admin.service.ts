import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AdminServices {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private serverURL = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  countOccurrencesByUrgencyInDateRange(from: string, to: string) {
    let param = new HttpParams().set('startDate', from).set('endDate', to);
    return this.http
      .get(this.serverURL + '/occurrences/countByUrgencyInDateRange', {
        headers: this.headers,
        params: param,
      })
      .toPromise()
      .then((res) => res)
      .catch(this.tratarErro);
  }

  filterOccurrenceByDateRange(from: string, to: string) {
    let param = new HttpParams().set('startDate', from).set('endDate', to);
    return this.http
      .get(this.serverURL + '/occurrences/filterByDateRange', {
        headers: this.headers,
        params: param,
      })
      .toPromise()
      .then((res) => res)
      .catch(this.tratarErro);
  }

  countOccurrencesByTypeInYear(year: string) {
    let param = new HttpParams().set('yearFilter', year);
    return this.http
    .get(this.serverURL + '/occurrences/countByTypeInYear', {
      headers: this.headers,
      params: param,
    })
    .toPromise()
    .then((res) => res)
    .catch(this.tratarErro);   
  }

  private tratarErro(erro: any): Promise<any> {
    console.error('Acesso mal sucedido ao serviço de ocorrências', erro);
    return Promise.reject(erro.message || erro);
  }

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
