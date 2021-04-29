import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Institution, Address} from '../../../common/models';


@Injectable()
export class UserWithoutOcurrence {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000/userWithoutOccurrence';

  constructor(private http: HttpClient) {}

  filterInstitutionsByType(type : string) {}
  filterInstitutionByAddress(address:Address) {}
  filterInstitutionByName(name:string) {}

  showLocationOnMap(institution : Institution){}

  
}