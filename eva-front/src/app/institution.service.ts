import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InstitutionsService {
  private serverURL = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  get(id: string) {
    return this.http
      .get('http://localhost:3333/institutions/608efde269bb833ae07a3d89')
      .toPromise()
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  show() {
    return 'showwwww!!!!!!!';
  }
}
