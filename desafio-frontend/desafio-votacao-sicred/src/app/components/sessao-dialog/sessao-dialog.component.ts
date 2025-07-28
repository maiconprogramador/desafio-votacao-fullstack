import { Component, Inject, OnInit } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PautasService } from 'src/app/services/pautas.service';

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
    private dialogRef: MatDialogRef<SessaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modo = data?.sessao ? 'editar' : 'criar';

    this.form = this.fb.group({
      id: [data?.sessao?.id || null],
      inicio: [this.formatDate(data?.sessao?.sessao?.inicio) || '', Validators.required],
      fim: [this.formatDate(data?.sessao?.sessao?.fim) || '', Validators.required],
      pautaIds: [
        this.modo === 'criar' ? [] : [data?.sessao?.pautaId],
        this.modo === 'criar' ? Validators.required : []
      ]
    });

    if (this.modo === 'editar') {
      console.log("editar: ", data)
      this.form.addControl('pautaId', this.fb.control(data.sessao.pauta?.id));
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
    if (this.form.valid) {
      if (this.modo === 'criar') {
        this.sessaoService.abrirSessao(this.form.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.sessaoService.atualizar(this.form.value).subscribe(() => {
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
