import { Component, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';
import { MatTableDataSource } from '@angular/material/table';
import { SessaoDialogComponent } from '../sessao-dialog/sessao-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sessao-lista',
  templateUrl: './sessao-lista.component.html',
  styleUrls: ['./sessao-lista.component.css']
})
export class SessaoListaComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  colunas: string[] = ['id', 'inicio', 'fim', 'status', 'acoes'];

  constructor(private sessaoService: SessaoService, private dialog: MatDialog) { }

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
        pauta: sessao.pauta // passar para mostrar o nome
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.carregarSessoes();
    });

  }

  deletar(id: number): void {
    // if (confirm('Tem certeza que deseja deletar esta sessão?')) {
    //   this.sessaoService.deletar(id).subscribe(() => this.carregarSessoes());
    // }
  }

  votar(sessao : any): void {
    // if (confirm('Tem certeza que deseja deletar esta sessão?')) {
    //   this.sessaoService.deletar(id).subscribe(() => this.carregarSessoes());
    // }
  }

}
