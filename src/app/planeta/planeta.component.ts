import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planeta } from '../models/planeta';
import { PlanetServiceService } from '../services/planet-service.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.scss']
})
export class PlanetaComponent implements OnInit {

  public planetas : Planeta[] = []; 
  public respuestaBorrar : string = "";
  public isShow: boolean = false;
  public planet: Planeta = {
    "id": "",
    "nombre": "",
    "descripcion": ""
  }; 

  constructor(
    private planetService : PlanetServiceService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.planetService.findAll().subscribe(data => {
      this.planetas = data;
    });
  }
  
  public goTo(path: string){
    this.route.navigate(path.split("/"));
  }

  public borrarPlaneta(id: string){
    this.planetService.borraPlaneta(id).subscribe(data => {
      this.respuestaBorrar = data;
      this.planetas = this.planetas.filter(p => p.id != id)
    });
  }

  public showPlaneta(id: string){
    this.planetService.showPlaneta(id).subscribe(data => {
      this.isShow = true;
      this.planet = data;
    });
  }

  
}
