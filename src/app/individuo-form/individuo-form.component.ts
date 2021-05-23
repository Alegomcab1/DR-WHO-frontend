import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planeta } from '../models/planeta';
import { Tecnologia } from '../models/tecnologia';
import { IndividuoService } from '../services/individuo.service';
import { PlanetServiceService } from '../services/planet-service.service';
import { TecnologiaService } from '../services/tecnologia.service';

@Component({
  selector: 'app-individuo-form',
  templateUrl: './individuo-form.component.html',
  styleUrls: ['./individuo-form.component.scss']
})
export class IndividuoFormComponent implements OnInit {

  public nombreIndividuo: string = "";
  public numCorazonesIndividuo: number = 0;
  public organismoIndividuo: string = "ORGANICO";
  public especie: string = "";
  public descripcionIndividuo: string = "";
  public planetas: number[] = [];
  public fullPlanetas: Planeta[] = [];
  public tecnologias: number[] = [];
  public fullTecnologias: Tecnologia[] = [];

  constructor(private individuoService : IndividuoService,
              private route: ActivatedRoute, 
              private router: Router,
              private planetService: PlanetServiceService,
              private tecnologiaService: TecnologiaService) { }

  ngOnInit(): void {
    this.especie = <string> this.route.snapshot.paramMap.get("especie"); //Para pasar elemento por URL

    this.planetService.findAll().subscribe(data => {
      this.fullPlanetas = data;
    });

    this.tecnologiaService.findAll().subscribe(data => {
      this.fullTecnologias = data;
    });

    if(this.route.snapshot.paramMap.get("id")) {
      this.individuoService.showIndividuo(<string> this.route.snapshot.paramMap.get("id")).subscribe(data => {
        this.nombreIndividuo = data.nombre;
        this.organismoIndividuo = data.organismo;
        this.especie = data.especie;
        this.descripcionIndividuo = data.descripcion;
        this.numCorazonesIndividuo = parseInt(data.numCorazones);
        this.planetas = data.habita.map(p => parseInt(p.id));
        this.tecnologias = data.esUsado.map(t => parseInt(t.id));
      })
    }
  }

    public goTo(path: string){
      this.router.navigate(path.split("/"));
    }
  
    public sendForm(){
      let data = {
        "id": "",
        "nombre": this.nombreIndividuo,
        "numCorazones": this.numCorazonesIndividuo,
        "organismo": this.organismoIndividuo,
        "especie": this.especie,
        "descripcion": this.descripcionIndividuo,
        "planetas": this.planetas,
        "tecnologias": this.tecnologias
      }
      console.log(data)

      if(this.route.snapshot.paramMap.get("id")) {

        data['id'] = <string> this.route.snapshot.paramMap.get("id");

        this.individuoService.updateIndividuo(data).subscribe(data => {
          this.goTo("individuo/" + this.especie)
        });

      } else {
        
        this.individuoService.createIndividuo(data).subscribe(data => {
          this.goTo("individuo/" + this.especie)
        });

      }
    }
  }


