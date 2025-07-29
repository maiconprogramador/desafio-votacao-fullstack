import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pauta } from '../shared/pauta.interface';

@Injectable({
  providedIn: 'root'
})
export class PautasService {

  private baseUrl = 'http://localhost:8080/api/v1/pautas'; // ajuste conforme sua API

  constructor(private http: HttpClient) { }

  getAllPautas(): Observable<Pauta[]> {
    return this.http.get<Pauta[]>(this.baseUrl);
  }

  getPautaById(id: number): Observable<Pauta> {
    return this.http.get<Pauta>(`${this.baseUrl}/buscaPorId/${id}`);
  }

  createNewPauta(pauta: Pauta): Observable<Pauta> {
    return this.http.post<Pauta>(this.baseUrl, pauta);
  }

  update(pauta: Pauta): Observable<Pauta> {
    return this.http.put<Pauta>(`${this.baseUrl}/${pauta.id}`, pauta);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  listarPautasSemSessao(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/disponiveis`);
  }

}
