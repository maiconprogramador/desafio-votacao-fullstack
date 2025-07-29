import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotoService {

  private apiUrl = 'https://desafio-votacao-fullstack-8nwr.onrender.com/api/v1/votos'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  enviarVoto(voto: any): Observable<any> {
    return this.http.post(this.apiUrl, voto);
  }
}
