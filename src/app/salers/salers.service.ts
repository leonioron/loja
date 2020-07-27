import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SalersService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllSalers(): Observable<any>  {
    return this.http
    .get(`/api/salers`);
  }

  saveSaler(saler: any): Observable<any>  {
    return this.http.post(`/api/saler`, {saler});
  }
}
