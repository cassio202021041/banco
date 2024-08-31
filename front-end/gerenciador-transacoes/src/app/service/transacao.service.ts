import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  private apiUrl = 'http://localhost:8000/api/transacoes';

  constructor(private http: HttpClient) { }

  getTransacoes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTransacao(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTransacao(transacao: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, transacao);
  }

  updateTransacao(id: number, transacao: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, transacao);
  }

  deleteTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
