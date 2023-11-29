import { mostrarResultado } from "./main.js";
import { Vehiculo } from "./vehiculo.js";

export class Todoterreno extends Vehiculo {
  #traccion;

  constructor(marca, modelo, color, fabricacion, cilindrada, traccion) {
    super(marca, modelo, color, fabricacion, cilindrada);
    this.#traccion = traccion;
  }

  mostrarDatos(){
    super.mostrarDatos();
    const datos = `Tracción -> ${this.traccion ? 'Sí' : 'No'}`;
    mostrarResultado(`${datos}`)
  }

  get traccion() {
    return this.#traccion;
  }

  set traccion(value) {
    this.#traccion = value;
  }
}
