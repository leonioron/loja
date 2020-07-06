import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SalersService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getSalers(): Observable<any[]> {
    return this.http.get<any[]>('url');
    //   .pipe(
    //     tap(_ => this.log('fetched heroes')),
    //     catchError(this.handleError<any[]>('getSalers', []))
    //   );
  }


  /** GET hero by id. Will 404 if id not found */
//   getHero(id: number): Observable<any> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get<Hero>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<any>(`getHero id=${id}`))
//     );
//   }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
//   addHero(hero: any): Observable<any> {
//     return this.http.post<any>(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap((newHero: any) => this.log(`added hero w/ id=${newHero.id}`)),
//       catchError(this.handleError<any>('addHero'))
//     );
//   }

  /** DELETE: delete the hero from the server */
//   deleteHero(hero: any | number): Observable<any> {
//     const id = typeof hero === 'number' ? hero : hero.id;
//     const url = `${this.heroesUrl}/${id}`;

//     return this.http.delete<any>(url, this.httpOptions).pipe(
//       tap(_ => this.log(`deleted hero id=${id}`)),
//       catchError(this.handleError<any>('deleteHero'))
//     );
//   }

  /** PUT: update the hero on the server */
//   updateHero(hero: any): Observable<any> {
//     return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap(_ => this.log(`updated hero id=${hero.id}`)),
//       catchError(this.handleError<any>('updateHero'))
//     );
//   }

}
