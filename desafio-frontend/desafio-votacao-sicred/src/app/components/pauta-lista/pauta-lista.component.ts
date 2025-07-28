import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PautasService } from 'src/app/services/pautas.service';
import { PautaDialogComponent } from '../pauta-dialog/pauta-dialog.component';

@Component({
  selector: 'app-pauta-lista',
  templateUrl: './pauta-lista.component.html',
  styleUrls: ['./pauta-lista.component.css']
})
export class PautaListaComponent {
  dataSource = new MatTableDataSource<any>();
  colunas: string[] = ['id', 'titulo', 'descricao', 'acoes'];

  constructor(private pautaService: PautasService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarPautas();
  }

  carregarPautas(): void {
    this.pautaService.getAllPautas().subscribe({
      next: (pautas) => this.dataSource.data = pautas,
      error: (err) => console.error('Erro ao carregar pautas', err)
    });
  }

  editar(idpauta: any): void {
    const dialogRef = this.dialog.open(PautaDialogComponent, {
      width: '600px',
      data: {
        idpauta
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.carregarPautas();
    });

  }

  deletar(id: number): void {
    // if (confirm('Tem certeza que deseja deletar esta sessão?')) {
    //   this.sessaoService.deletar(id).subscribe(() => this.carregarSessoes());
    // }
  }

  votar(sessao: any): void {
    // if (confirm('Tem certeza que deseja deletar esta sessão?')) {
    //   this.sessaoService.deletar(id).subscribe(() => this.carregarSessoes());
    // }
  }
}
