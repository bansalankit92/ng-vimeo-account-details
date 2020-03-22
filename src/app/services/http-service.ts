import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  get(url, httpParams ?: HttpParams): Observable < any > {
    if (httpParams) {
      httpOptions['params'] = httpParams;
    }
    return this.http.get(url, httpOptions);
  }

  post(url, body): Observable < any > {
    return this.http.post(url, body, httpOptions);
  }


  // Update a comment
  put(url, id: string, body: any): Observable < any > {
    return this.http.put(`${url}/${id}`, body, httpOptions); // ...using put request

  }




}
