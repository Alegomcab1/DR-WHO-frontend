import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planeta } from '../models/planeta';

@Injectable({
  providedIn: 'root'
})
export class PlanetServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080';
  }

  public findAll(): Observable<Planeta[]> {
    return this.http.get<Planeta[]>(this.usersUrl + "/listPlaneta");
  }
}
