import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pauta } from 'src/app/shared/pauta.interface';

@Component({
  selector: 'app-pauta-dialog',
  templateUrl: './pauta-dialog.component.html',
  styleUrls: ['./pauta-dialog.component.css']
})
export class PautaDialogComponent {
  pautaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PautaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pauta
  ) {
    this.pautaForm = this.fb.group({
      titulo: [data?.titulo || '', Validators.required],
      descricao: [data?.descricao || '', Validators.required],
    });
  }

  salvar(): void {
    if (this.pautaForm.valid) {
      const formValue = this.pautaForm.value;
      const pauta: Pauta = {
        ...formValue,
        id: this.data?.id, // se estiver em edição
      };
      this.dialogRef.close(pauta);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
