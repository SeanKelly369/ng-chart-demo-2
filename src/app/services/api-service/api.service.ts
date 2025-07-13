import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private readonly httpClient = inject(HttpClient);

  getData(baseUrl: string, endpoint: string, parameters?: HttpParams): Observable<unknown> {
    const url = `${baseUrl}/${endpoint}`;

    return this.httpClient.get(url, { params: parameters })
      .pipe(
        map(data => data),
        catchError( error => of(new Error(JSON.stringify(error))))
      );
  }
}
