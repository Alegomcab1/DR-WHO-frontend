import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../services/tecnologia.service';

@Component({
  selector: 'app-tecnologia-form',
  templateUrl: './tecnologia-form.component.html',
  styleUrls: ['./tecnologia-form.component.scss']
})
export class TecnologiaFormComponent implements OnInit {

  public nombreTecnologia: string = "";
  public descripcionTecnologia: string = "";
  public isUpdate: boolean = false;
  public idTecnologia: string = "";
  public tecnologia: Tecnologia = {
    "id": "",
    "nombre": "",
    "descripcion": ""
  };

  constructor(private tecnologiaService : TecnologiaService, private route : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activeRoute.snapshot.paramMap.has("id")){
      this.isUpdate = true
      this.idTecnologia = this.activeRoute.snapshot.paramMap.get("id") as string
      
      this.tecnologiaService.showTecnologia(this.idTecnologia).subscribe(data => {
        this.tecnologia = data;
        this.nombreTecnologia = this.tecnologia.nombre
        this.descripcionTecnologia = this.tecnologia.descripcion
      });
    }
  }

  public goTo(path: string){
    this.route.navigate(path.split("/"));
  }

  public sendForm(){
    
    if(this.activeRoute.snapshot.paramMap.has("id")){

      let data = {
        "id": this.idTecnologia,
        "nombre": this.nombreTecnologia,
        "descripcion": this.descripcionTecnologia
      }
      this.tecnologiaService.updateTecnologia(data).subscribe(data => {
        this.goTo("tecnologia")
      });
    }else{

      let data = {
        "nombre": this.nombreTecnologia,
        "descripcion": this.descripcionTecnologia
      }
      this.tecnologiaService.createTecnologia(data).subscribe(data => {
        this.goTo("tecnologia")
      });
    }

    
  }

}
