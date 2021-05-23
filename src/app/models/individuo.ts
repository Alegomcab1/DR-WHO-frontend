import { Planeta } from "./planeta";
import { Tecnologia } from "./tecnologia";

export class Individuo {
    id: string;
    nombre: string;
    especie: string;
    numCorazones: string;
    organismo: string;
    descripcion: string;
    habita: Planeta[];
    esUsado: Tecnologia[];

    constructor(id: string, nombre: string, especie: string, numCorazones: string, organismo: string, descripcion: string){
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.numCorazones = numCorazones;
        this.organismo = organismo;
        this.descripcion = descripcion;
        this.habita = [];
        this.esUsado = [];
      }
}
