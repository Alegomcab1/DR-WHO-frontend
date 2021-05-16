import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../models/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080';
  }

  public findAll(): Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.usersUrl + "/listTecnologia");
  }
}
