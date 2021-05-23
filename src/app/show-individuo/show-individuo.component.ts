import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Individuo } from '../models/individuo';
import { IndividuoService } from '../services/individuo.service';

@Component({
  selector: 'app-show-individuo',
  templateUrl: './show-individuo.component.html',
  styleUrls: ['./show-individuo.component.scss']
})
export class ShowIndividuoComponent implements OnInit {

  public individuo: Individuo = new Individuo("", "", "", "", "", "");
  public id: string = "";

  constructor(private route: ActivatedRoute,
              private individuoService : IndividuoService,
              private router: Router) { }

  ngOnInit(): void {

    this.id = <string> this.route.snapshot.paramMap.get("id"); //Para pasar elemento por URL

    this.individuoService.showIndividuo(this.id).subscribe(data => {
      this.individuo = data;
    });
  }

  public goTo(path: string){
    this.router.navigate(path.split("/"));
  }

}
