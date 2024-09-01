import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Conta } from './conta'

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private apiURL = 'http://127.0.0.1:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/contas/').pipe(catchError(this.errorHandler));
  }

  create(conta: Conta): Observable<any> {
    return this.httpClient.post(this.apiURL + '/contas/', JSON.stringify(conta), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/contas/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: number, conta: Conta): Observable<any> {
    return this.httpClient.put(this.apiURL + '/contas/' + id, JSON.stringify(conta), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/contas/' + id)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
