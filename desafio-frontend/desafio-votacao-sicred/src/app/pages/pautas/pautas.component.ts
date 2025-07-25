import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-pautas',
  templateUrl: './pautas.component.html',
  styleUrls: ['./pautas.component.css']
})
export class PautasComponent implements OnInit{

  pautas: any[] = [];

  constructor(private mock: MockService, private router: Router) {}

  ngOnInit(): void {
    this.carregarPautas();
  }

  carregarPautas() {
    this.mock.getPautas().subscribe(data => this.pautas = data);
  }

  votar(id: number) {
    this.router.navigate(['/votar', id]);
  }

  abrirSessao(id: number) {
    this.mock.abrirSessao(id).subscribe(() => this.carregarPautas());
  }

}
