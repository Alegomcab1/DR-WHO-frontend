import { Component, OnInit } from '@angular/core';
import { Individuo } from '../models/individuo';
import { IndividuoService } from '../services/individuo.service';

@Component({
  selector: 'app-individuo',
  templateUrl: './individuo.component.html',
  styleUrls: ['./individuo.component.scss']
})
export class IndividuoComponent implements OnInit {

  public individuos : Individuo[] = []; 

  constructor(private individuoService : IndividuoService) { }

  ngOnInit(): void {
    this.individuoService.findAll().subscribe(data => {
      this.individuos = data;
    });
  }

}
