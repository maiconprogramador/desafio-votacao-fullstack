import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from 'src/app/services/mock.service';
import { VotoService } from 'src/app/services/voto.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  resultado: any;

  constructor(private route: ActivatedRoute, private votoService: VotoService, ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.votoService.buscarResultado(id).subscribe(data => {
      console.log("resultado", data)
      this.resultado = data
    });
  }
}
