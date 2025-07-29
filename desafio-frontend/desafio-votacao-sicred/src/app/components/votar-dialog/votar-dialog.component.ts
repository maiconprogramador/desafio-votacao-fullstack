import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-votar-dialog',
  templateUrl: './votar-dialog.component.html',
  styleUrls: ['./votar-dialog.component.css']
})
export class VotarDialogComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<VotarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("data: ", data)
    this.form = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      voto: [null, Validators.required]
    });
  }

  confirmar() {
    if (this.form.valid) {
      const votoData = {
        ...this.form.value,
        idSessao: this.data.sessao.sessao.id
      };
      this.dialogRef.close(votoData);
    }
  }

  cancelar() {
    this.dialogRef.close();
  }

}
