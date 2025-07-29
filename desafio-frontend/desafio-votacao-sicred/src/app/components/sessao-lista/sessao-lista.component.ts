import { Component, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';
import { MatTableDataSource } from '@angular/material/table';
import { SessaoDialogComponent } from '../sessao-dialog/sessao-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { VotoService } from 'src/app/services/voto.service';
import { VotarDialogComponent } from '../votar-dialog/votar-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessao-lista',
  templateUrl: './sessao-lista.component.html',
  styleUrls: ['./sessao-lista.component.css']
})
export class SessaoListaComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  colunas: string[] = ['id', 'inicio', 'fim', 'status', 'acoes'];

  constructor(private sessaoService: SessaoService, private dialog: MatDialog, private votoService: VotoService, private router: Router) { }

  ngOnInit(): void {
    this.carregarSessoes();
  }

  carregarSessoes(): void {
    this.sessaoService.listarSessoesComStatus().subscribe({
      next: (sessoes) => this.dataSource.data = sessoes,
      error: (err) => console.error('Erro ao carregar sessões', err)
    });
  }

  editar(sessao: any): void {
    const dialogRef = this.dialog.open(SessaoDialogComponent, {
      width: '600px',
      data: {
        sessao,
        pauta: sessao.pauta
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.carregarSessoes();
    });

  }

  deletar(sessao: any): void {
    if (confirm('Tem certeza que deseja deletar esta sessão?')) {
      this.sessaoService.delete(sessao.sessao.id).subscribe(() => this.carregarSessoes());
    }
  }

  resultado(sessao: any): void {
    this.router.navigate(['resultado', sessao.sessao.id]);
  }

  votar(sessao : any): void {
    const dialogRef = this.dialog.open(VotarDialogComponent, {
    width: '400px',
    data: { sessao }
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.votoService.enviarVoto(result).subscribe({
        next: () => {
          alert('Voto registrado com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao registrar voto:', err);
          alert('Erro ao registrar o voto.');
        }
      });
    }
  });
  }

}
