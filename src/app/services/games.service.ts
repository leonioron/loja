import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../data/app.api';

@Injectable({ providedIn: 'root' })
export class GamesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getGames(): Promise<any> {
    return this.http.get(`${URL_API}/games`)
    .toPromise();
  }

  public saveGame(game: any): Observable<any> {
    let header = new HttpHeaders().append('Content-type', 'application/json');
    return this.http.post(
      `${URL_API}/games`,
      JSON.stringify(game),
      {headers: header});
  }




}
