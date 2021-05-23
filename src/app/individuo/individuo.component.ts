import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  respuestaBorrar: string = "";

  constructor(private individuoService : IndividuoService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    this.especie = <string> this.route.snapshot.paramMap.get("especie"); //Para pasar elemento por URL

    this.individuoService.buscaPorEspecie(this.especie).subscribe(data => {
      this.individuos = data;
    }); // Promesa
  }

  public goTo(path: string){
    this.router.navigate(path.split("/"));
  }

  public borrarIndividuo(id : string){
    this.individuoService.borraIndividuo(id).subscribe(data => {
      this.respuestaBorrar = data;
      this.individuos = this.individuos.filter(p => p.id != id)
    });
  }

}
