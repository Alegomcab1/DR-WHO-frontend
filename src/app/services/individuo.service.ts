import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Individuo } from '../models/individuo';

@Injectable({
  providedIn: 'root'
})
export class IndividuoService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080';
  }

  public buscaPorEspecie(especie: string): Observable<Individuo[]> {
    return this.http.post<Individuo[]>(this.usersUrl + "/listEspecies", {"especie": especie});
  }

  public borraIndividuo(id: string): Observable<string> {
    let data = {
      "id": id
    }
    return this.http.post<string>(this.usersUrl + "/deleteIndividuo", data);
  }

  public createIndividuo(form : any):Observable<string>{
    return this.http.post<string>(this.usersUrl + "/createIndividuo", form);
    
  }

  public updateIndividuo(form : any){
    
    return this.http.post<Individuo>(this.usersUrl + "/updateIndividuo", form);
  }

  public showIndividuo(id: string):  Observable<Individuo>{
    let data = {
      "id": id
    }
    return this.http.post<Individuo>(this.usersUrl + "/showIndividuo", data);
  }
}
