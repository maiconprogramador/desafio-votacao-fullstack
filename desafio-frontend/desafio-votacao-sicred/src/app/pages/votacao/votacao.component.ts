import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrls: ['./votacao.component.css']
})
export class VotacaoComponent {

  pautaId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.pautaId = Number(this.route.snapshot.paramMap.get('id'));
  }

  votar(opcao: string) {
    alert(`Voto '${opcao}' computado!`);
    this.router.navigate(['/resultado', this.pautaId]);
  }

}
