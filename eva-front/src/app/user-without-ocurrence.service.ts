import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Institution, Address} from '../../../common/models';


@Injectable()
export class UserWithoutOcurrence {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private serverURL = "http://localhost:3333";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {}

  //filterInstitutionsByType(type : string) {}
  //filterInstitutionByAddress(address:Address) {}
  

  filterInstitutionByName(name:string) {
    //let param = new HttpParams().set("id", name);
    let param = "?id="+ name;
    return this.http.get<Institution>(this.serverURL + "/institutions/findbyname" + param)
             .toPromise()
             .then(res => res)
             .catch(this.erro);
  }

  filterInstitutionByNameByCity(name:string, cityName: string) {
  //  let param = new HttpParams().set("id", name).set("city", cityName);?id=Psi&city=Recife
    let param = "?id="+ name + "&city=" + cityName;
    return this.http.get<Institution>(this.serverURL + "/institutions/findbyname/findbycity" + param)
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