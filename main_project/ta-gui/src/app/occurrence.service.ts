import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Occurrence} from '../../../common/models';

@Injectable()
export class AdminServices {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000/occurrences';

  constructor(private http: HttpClient) {}
  

  findInstitutions(occurrence:Occurrence): Observable<Occurrence> {}
  addOccurrence(occurence: Occurrence):Observable<Occurrence> {}

  
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