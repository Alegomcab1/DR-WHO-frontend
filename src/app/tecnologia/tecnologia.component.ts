import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../services/tecnologia.service';


@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  public tecnologias : Tecnologia[] = []; 


  constructor(private tecnologiaService : TecnologiaService) { }

  ngOnInit(): void {
    this.tecnologiaService.findAll().subscribe(data => {
      this.tecnologias = data;
    });
  }

}
