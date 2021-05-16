export class Individuo {
    id: string;
    nombre: string;
    especie: string;
    numCorazones: string;
    organismo: string;
    descripcion: string;

    constructor(id: string, nombre: string, especie: string, numCorazones: string, organismo: string, descripcion: string){
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.numCorazones = numCorazones;
        this.organismo = organismo;
        this.descripcion = descripcion;
      }
}
