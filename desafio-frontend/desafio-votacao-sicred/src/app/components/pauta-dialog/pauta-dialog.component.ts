import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PautasService } from 'src/app/services/pautas.service';
import { Pauta } from 'src/app/shared/pauta.interface';

@Component({
  selector: 'app-pauta-dialog',
  templateUrl: './pauta-dialog.component.html',
  styleUrls: ['./pauta-dialog.component.css']
})
export class PautaDialogComponent {
  pautaForm: FormGroup;
  modo: 'editar' | 'criar';

  constructor(
    private fb: FormBuilder,
    private pautaService: PautasService,
    public dialogRef: MatDialogRef<PautaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modo = data?.pauta ? 'editar' : 'criar';
    this.pautaForm = this.fb.group({
      titulo: [data?.pauta?.titulo || '', Validators.required],
      descricao: [data?.pauta?.descricao || '', Validators.required],
    });
  }

  salvar(): void {
    if (this.pautaForm.valid) {
      if (this.modo === 'criar') {
        this.pautaService.createNewPauta(this.pautaForm.value).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        const formValue = this.pautaForm.value;
        const pauta: Pauta = {
          ...formValue,
          id: this.data?.pauta.id,
        };
        this.pautaService.update(pauta).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
