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

  public borraTecnologia(id: string): Observable<string> {
    let data = {
      "id": id
    }
    return this.http.post<string>(this.usersUrl + "/deleteTecnologia", data);
  }

  public createTecnologia(form : any):Observable<string>{
    return this.http.post<string>(this.usersUrl + "/createTecnologia", form);
    
  }

  public showTecnologia(id: string):  Observable<Tecnologia>{
    let data = {
      "id": id
    }
    return this.http.post<Tecnologia>(this.usersUrl + "/showTecnologia", data);
  }

  public updateTecnologia(form : any){
    
    return this.http.post<Tecnologia>(this.usersUrl + "/updateTecnologia", form);
  }
}
