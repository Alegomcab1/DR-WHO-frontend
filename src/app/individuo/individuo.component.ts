import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Individuo } from '../models/individuo';
import { IndividuoService } from '../services/individuo.service';

@Component({
  selector: 'app-individuo',
  templateUrl: './individuo.component.html',
  styleUrls: ['./individuo.component.scss']
})
export class IndividuoComponent implements OnInit {

  public individuos : Individuo[] = []; 
  public especie : string = "";

  constructor(private individuoService : IndividuoService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.especie = <string> this.route.snapshot.paramMap.get("especie"); //Para pasar elemento por URL

    this.individuoService.buscaPorEspecie(this.especie).subscribe(data => {
      this.individuos = data;
    }); // Promesa
  }

}
