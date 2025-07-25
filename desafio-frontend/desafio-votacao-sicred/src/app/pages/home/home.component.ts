import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  form: FormGroup;
  mensagem = '';

  constructor(private fb: FormBuilder, private mock: MockService) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  criar() {
    const { titulo, descricao } = this.form.value;
    this.mock.criarPauta(titulo, descricao).subscribe(() => {
      this.mensagem = 'Pauta criada com sucesso!';
      this.form.reset();
    });
  }

}
