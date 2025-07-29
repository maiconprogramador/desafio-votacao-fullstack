import { Component, Inject, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PautasService } from 'src/app/services/pautas.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sessao-dialog',
  templateUrl: './sessao-dialog.component.html',
  styleUrls: ['./sessao-dialog.component.css']
})
export class SessaoDialogComponent implements OnInit {
  form: FormGroup;
  pautasDisponiveis: any[] = [];
  modo: 'editar' | 'criar';

  constructor(
    private fb: FormBuilder,
    private sessaoService: SessaoService,
    private pautaService: PautasService,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<SessaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modo = data?.sessao ? 'editar' : 'criar';
    this.form = this.fb.group({
      id: [data?.sessao?.sessao.id || null],
      inicio: [this.formatDate(data?.sessao?.sessao?.inicio) || '', Validators.required],
      fim: [this.formatDate(data?.sessao?.sessao?.fim) || '', Validators.required],
      idPauta: [
        this.modo === 'criar' ? null : data?.sessao?.idPauta,
        Validators.required
      ]
    });

    if (this.modo === 'editar') {
      this.form.addControl('pautaId', this.fb.control(data.sessao.sessao.pauta.id));
      this.form.removeControl('idPauta');
    }
  }

  ngOnInit(): void {
    if (this.modo === 'criar') {
      this.pautaService.listarPautasSemSessao().subscribe(pautas => {
        this.pautasDisponiveis = pautas;
      });
    }
  }

  salvar(): void {
    console.log("entrou slavar", this.data)
    console.log("entrou slavar", this.form.value)
    if (this.form.valid) {
      if (this.modo === 'criar') {
        const dto = {
          idPauta: this.form.value.idPauta,
          inicio: this.datePipe.transform(this.form.value.inicio, 'dd/MM/yyyy HH:mm'),
          fim: this.datePipe.transform(this.form.value.fim, 'dd/MM/yyyy HH:mm')
        };
        this.sessaoService.abrirSessao(dto).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        const dto = {
          id: this.data.sessao.sessao.id,
          idPauta: this.form.value.pautaId,
          inicio: this.datePipe.transform(this.form.value.inicio, 'dd/MM/yyyy HH:mm'),
          fim: this.datePipe.transform(this.form.value.fim, 'dd/MM/yyyy HH:mm')
        };
        this.sessaoService.atualizar(dto).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  private formatDate(dateString: string): string | null {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toISOString().slice(0, 16); // yyyy-MM-ddTHH:mm
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
