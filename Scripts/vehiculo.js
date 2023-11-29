class Vehiculo {
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
  //    constructor por defecto o sin parámetros
  constructor(){}

  mostrarDatos(){
    const datos = `La marca es -> ${this.marca}
    <br>
    El modelo es -> ${this.modelo}
    <br>
    Su color es -> ${this.color}
    <br>
    Se fabricó el año -> ${this.fabricacion}
    <br>
    Cilindrada -> ${this.cilindrada}
    `;

    //  Llamar a la función mostrarResultado definida en el main.js
    mostrarResultado(`<p>${datos}</p>`)
  }
}
