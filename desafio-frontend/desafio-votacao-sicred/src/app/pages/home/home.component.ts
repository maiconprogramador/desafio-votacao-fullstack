import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PautaDialogComponent } from 'src/app/components/pauta-dialog/pauta-dialog.component';
import { SessaoDialogComponent } from 'src/app/components/sessao-dialog/sessao-dialog.component';
import { PautasService } from 'src/app/services/pautas.service';
import { Pauta } from 'src/app/shared/pauta.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  mensagem = '';

  constructor(private fb: FormBuilder, private pautaService: PautasService, private router: Router, private dialog: MatDialog) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  abrirCriarSessao(): void {
    const dialogRef = this.dialog.open(SessaoDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        window.location.reload();
      }
    });
  }

  navigatePautasDispo() {
    this.router.navigate(['pautas'])
  }

  novaPauta(): void {
    const dialogRef = this.dialog.open(PautaDialogComponent, {
      width: '500px',
      data: {} as Pauta
    });

    dialogRef.afterClosed().subscribe((result: Boolean) => {
      if (result) {
        console.log('Pauta criado com sucesso!');
        this.navigatePautasDispo();
      }
    });
  }

}
