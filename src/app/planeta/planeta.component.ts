import { Component, OnInit } from '@angular/core';
import { Planeta } from '../models/planeta';
import { PlanetServiceService } from '../services/planet-service.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.scss']
})
export class PlanetaComponent implements OnInit {

  public planetas : Planeta[] = []; 

  constructor(private planetService : PlanetServiceService) { }

  ngOnInit(): void {
    this.planetService.findAll().subscribe(data => {
      this.planetas = data;
    });
  }

}
