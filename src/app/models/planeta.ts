import { FormBuilder } from "@angular/forms";

export class Planeta {
    id: string;
    nombre: string;
    descripcion: string;


    constructor(id: string, nombre: string, descripcion: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        
      }
}      
     

