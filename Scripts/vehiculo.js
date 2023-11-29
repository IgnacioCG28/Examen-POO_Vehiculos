import { mostrarResultado } from "./main.js";

export class Vehiculo {
  //Privados
  #marca;
  #modelo;
  #color;
  #fabricacion;
  #cilindrada;

  //    Constructor con parámetros
  constructor(marca, modelo, color, fabricacion, cilindrada) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#fabricacion = fabricacion;
    this.#cilindrada = cilindrada;
  }
  //    constructor por defecto o sin parámetros, lo heredan de forma predeterminada las clases hijas
  // constructor(){}

  mostrarDatos(){
    const datos = `La marca es -> ${this.marca}
    <br/>
    El modelo es -> ${this.modelo}
    <br/>
    Su color es -> ${this.color}
    <br/>
    Se fabricó el año -> ${this.fabricacion}
    <br/>
    Cilindrada -> ${this.cilindrada}
    `;

    //  Llamar a la función mostrarResultado definida en el main.js, con node.js esta línea desaparece
    mostrarResultado(`<p>${datos}</p>`)
  }

  acelerar(velocidad){
    const mensaje = `<br/>Se ha acelerado hasta -> ${velocidad}km/h`;
    mostrarResultado(`<p>${mensaje}</p>`)
  }

  arrancar(){
    const mensaje = `<br/>El coche ${this.#marca}, ${this.#modelo}, de color ${this.#color} ha arrancado`;
    mostrarResultado(`<p>${mensaje}</p>`)
  }

  frenar(){
    const mensaje = `<br/>El coche ${this.#marca}, ${this.#modelo}, de color ${this.#color} ha parado`;
    mostrarResultado(`<p>${mensaje}</p>`)
  }

  get marca(){
    return this.#marca;
  }

  set marca(value){
    this.#marca = value;
  }

  get modelo(){
    return this.#modelo;
  }

  set modelo(value){
    this.#modelo = value;
  }

  get color(){
    return this.#color;
  }

  set color(value){
    this.#color = value;
  }

  get fabricacion(){
    return this.#fabricacion;
  }

  set fabricacion(value){
    this.#fabricacion = value;
  }

  get cilindrada(){
    return this.#cilindrada;
  }

  set cilindrada(value){
    this.#cilindrada = value;
  }
}
