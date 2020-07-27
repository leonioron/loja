import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GamesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getGames(): Observable<any>  {
    return this.http
    .get(`/api/users`);
  }

  getTeste(): Observable<any>  {
    return this.http
    .get(`/api/products`);
  }

  saveGame(game: any): Observable<any>  {
    return this.http.post(`/api/game`, {game});
  }




}
