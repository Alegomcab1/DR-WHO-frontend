import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private planetService : PlanetServiceService, private route : Router) { }

  ngOnInit(): void {
  }

  public goTo(path: string){
    this.route.navigate(path.split("/"));
  }

  public sendForm(){
    let data = {
      "nombre": this.nombrePlaneta,
      "descripcion": this.descripcionPlaneta
    }
    console.log(data)

    this.planetService.createPlaneta(data).subscribe(data => {
      this.goTo("planeta")
    });
  }

}
