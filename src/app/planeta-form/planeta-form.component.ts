import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planeta } from '../models/planeta';
import { PlanetServiceService } from '../services/planet-service.service';

@Component({
  selector: 'app-planeta-form',
  templateUrl: './planeta-form.component.html',
  styleUrls: ['./planeta-form.component.scss']
})
export class PlanetaFormComponent implements OnInit {

  public nombrePlaneta: string = "";
  public descripcionPlaneta: string = "";
  public isUpdate: boolean = false;
  public idPlaneta: string = "";
  public planeta: Planeta = {
    "id": "",
    "nombre": "",
    "descripcion": ""
  };

  constructor(private planetService : PlanetServiceService, private route : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activeRoute.snapshot.paramMap.has("id")){
      this.isUpdate = true
      this.idPlaneta = this.activeRoute.snapshot.paramMap.get("id") as string
      
      this.planetService.showPlaneta(this.idPlaneta).subscribe(data => {
        this.planeta = data;
        this.nombrePlaneta = this.planeta.nombre
        this.descripcionPlaneta = this.planeta.descripcion
      });
    }
  }

  public goTo(path: string){
    this.route.navigate(path.split("/"));
  }

  public sendForm(){
    
    if(this.activeRoute.snapshot.paramMap.has("id")){

      let data = {
        "id": this.idPlaneta,
        "nombre": this.nombrePlaneta,
        "descripcion": this.descripcionPlaneta
      }
      this.planetService.updatePlaneta(data).subscribe(data => {
        this.goTo("planeta")
      });
    }else{

      let data = {
        "nombre": this.nombrePlaneta,
        "descripcion": this.descripcionPlaneta
      }
      this.planetService.createPlaneta(data).subscribe(data => {
        this.goTo("planeta")
      });
    }

    
  }

}
