import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Institution } from '../../../common/models';


@Injectable()
export class UserWithoutOcurrence {

  private serverURL = "http://localhost:3333";

  constructor(private http: HttpClient) {}

  filterInstitutionByName(name:string) {
    let param = "?id="+ name;
    return this.http.get<Institution>(this.serverURL + "/institutions_name/findbyname" + param)
             .toPromise()
             .then(res => res)
             .catch(this.erro);
  }

  filterInstitutionByNameByCity(name:string, cityName: string) {
    let param = "?id="+ name + "&city=" + cityName;
    return this.http.get<Institution>(this.serverURL + "/institutions_name/findbyname/findbycity" + param)
             .toPromise()
             .then(res => res)
             .catch(this.erro);
  }

  private erro(erro: any):  Promise<any>{
    console.error('Acesso mal sucedido ao serviço de instituições',erro);
    return Promise.reject(erro.message || erro);
  }

  showLocationOnMap(institution : Institution){}

  
}