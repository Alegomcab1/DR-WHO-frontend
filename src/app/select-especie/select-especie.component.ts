import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-especie',
  templateUrl: './select-especie.component.html',
  styleUrls: ['./select-especie.component.scss']
})
export class SelectEspecieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  public goTo(path: string){
    this.router.navigate(path.split("/"));
  }

}
