import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  resultado: any;

  constructor(private route: ActivatedRoute, private mock: MockService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mock.getResultado(id).subscribe(data => this.resultado = data);
  }
}
