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
}
