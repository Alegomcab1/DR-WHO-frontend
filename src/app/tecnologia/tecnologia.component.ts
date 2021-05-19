import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../services/tecnologia.service';


@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  public tecnologias : Tecnologia[] = []; 
  public respuestaBorrar : string = "";
  public isShow: boolean = false;
  public tecnolog: Tecnologia = {
    "id": "",
    "nombre": "",
    "descripcion": ""
  }; 


  constructor(
    private tecnologiaService : TecnologiaService,
    private route : Router
    ) { }

  ngOnInit(): void {
    this.tecnologiaService.findAll().subscribe(data => {
      this.tecnologias = data;
    });
  }

  public goTo(path: string){
    this.route.navigate(path.split("/"));
  }

  public borrarTecnologia(id: string){
    this.tecnologiaService.borraTecnologia(id).subscribe(data => {
      this.respuestaBorrar = data;
      this.tecnologias = this.tecnologias.filter(p => p.id != id)
    });
  }

  public showTecnologia(id: string){
    this.tecnologiaService.showTecnologia(id).subscribe(data => {
      this.isShow = true;
      this.tecnolog = data;
    });
  }

}
