import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessaoDialogComponent } from 'src/app/components/sessao-dialog/sessao-dialog.component';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  form: FormGroup;
  mensagem = '';

  constructor(private fb: FormBuilder, private mock: MockService, private router: Router, private dialog: MatDialog) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  abrirCriarSessao(): void {
    const dialogRef = this.dialog.open(SessaoDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

  navigatePautasDispo() {
    this.router.navigate(['pautas'])
  }

}
