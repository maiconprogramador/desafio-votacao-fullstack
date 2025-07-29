import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sessao, SessaoDTO, SessaoStatus } from '../shared/sessao.interface';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  private baseUrl = 'http://localhost:8080/api/v1/sessoes'; // Troque pela URL real do seu backend

  constructor(private http: HttpClient) { }

  abrirSessao(sessao: any): Observable<Sessao> {
    return this.http.post<Sessao>(`${this.baseUrl}`, sessao);
  }

  buscarSessaoAberta(idSessao: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/buscarSessoesAbertas/${idSessao}`);
  }

  listarSessoesComStatus(): Observable<SessaoStatus[]> {
    return this.http.get<SessaoStatus[]>(`${this.baseUrl}/listarTodasSessoesComStatus`);
  }

  atualizar(sessao: any): Observable<Sessao> {
    return this.http.put<Sessao>(`${this.baseUrl}/${sessao.id}`, sessao);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
