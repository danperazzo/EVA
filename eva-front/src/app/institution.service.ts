import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InstitutionsService {
  private serverURL = 'http://localhost:3333/institutions';

  constructor(private http: HttpClient) {}

  get(id: string) {
    return this.http
      .get(`${this.serverURL}/${id}`)
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
