import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private pautas = [
    { id: 1, titulo: 'Redução de taxas', descricao: 'Votação para redução de taxas da cooperativa.', sessaoAberta: false },
    { id: 2, titulo: 'Nova sede', descricao: 'Votação sobre aquisição de nova sede.', sessaoAberta: true },
  ];
  private proximoId = 3;

  getPautas(): Observable<any[]> {
    return of(this.pautas);
  }

  criarPauta(titulo: string, descricao: string): Observable<any> {
    const novaPauta = { id: this.proximoId++, titulo, descricao, sessaoAberta: false };
    this.pautas.push(novaPauta);
    return of(novaPauta);
  }

  abrirSessao(id: number): Observable<any> {
    const pauta = this.pautas.find(p => p.id === id);
    if (pauta) pauta.sessaoAberta = true;
    return of(pauta);
  }

  getResultado(id: number): Observable<any> {
    return of({
      id,
      titulo: this.pautas.find(p => p.id === id)?.titulo,
      votosSim: 120,
      votosNao: 30
    });
  }
}
