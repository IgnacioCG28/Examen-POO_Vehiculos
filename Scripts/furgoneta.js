import { mostrarResultado } from "./main.js";
import { Vehiculo } from "./vehiculo.js";
export class Furgoneta extends Vehiculo {
  #pasajeros;

  constructor(marca, modelo, color, fabricacion, cilindrada, pasajeros) {
    // Heredamos de la clase padre
    super(marca, modelo, color, fabricacion, cilindrada);
    this.#pasajeros = pasajeros;
  }

  mostrarDatos(){
    super.mostrarDatos();
    const datos = `Pasajeros -> ${this.pasajeros}`;
    mostrarResultado(`${datos}`)
  }

  get pasajeros() {
    return this.#pasajeros;
  }

  set pasajeros(value) {
    this.#pasajeros = value;
  }
}
