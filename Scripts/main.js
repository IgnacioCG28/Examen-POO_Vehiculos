import { Vehiculo } from "./vehiculo.js";
import { Furgoneta } from "./furgoneta.js";
import { Todoterreno } from "./todoterreno.js";

// Crear un contenedor para mostrar resultados
const resultadoContenedor = document.createElement("div");
document.body.appendChild(resultadoContenedor);

// Función para mostrar datos
export function mostrarResultado(mensaje) {
  resultadoContenedor.innerHTML += `<p>${mensaje}</p>`;
}

// Variable de tipo Object de un objeto vehículo

const vehiculoObject = {
  marca: "BMW",
  modelo: "CLK",
  color: "rojo",
  fabricacion: 2011,
  cilindrada: 2000,
};

//Almacenamos datos = Guardar el JSON en el LocalStorage
localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));

//Mostrar datos- Mostrar el Object en consola
console.log(JSON.parse(localStorage.getItem("vehiculo")));

// Imprimimos JSON por consola
console.log(localStorage.getItem("vehiculo"));

// Muestra de un objeto vehículo

const vehiculo1 = new Vehiculo("Toyota", "Yaris", "Rojo", 2011, 1200);
mostrarResultado(`<h2>--Vehículo 1--</h2>`);
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(90);
vehiculo1.frenar();

const furgoneta1 = new Furgoneta("Mercedes", "Citan", "Gris", 2022, 2000, 8);
mostrarResultado(`<h2>--Vehículo 2 Furgoneta--</h2>`);
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(60);
furgoneta1.frenar();

// Guardamos en el localStorage la marca de una furgoneta

localStorage.setItem("Marca Furgoneta", furgoneta1.marca);

const todoterreno1 = new Todoterreno(
  "Range Rover",
  "Defender",
  "Negro",
  2023,
  2030,
  true
);
mostrarResultado(`<h2>--Vehículo 3 Todoterreno--</h2>`);
todoterreno1.mostrarDatos();
todoterreno1.arrancar();
todoterreno1.acelerar(70);
todoterreno1.frenar();

//Generar variable tipo object con POO

const todoterrenoObject = {
  marca: todoterreno1.marca,
  modelo: todoterreno1.modelo,
  color: todoterreno1.color,
  fabricacion: todoterreno1.fabricacion,
  cilindrada: todoterreno1.cilindrada,
  traccion: todoterreno1.traccion,
};

for(let key in todoterrenoObject){
  // hasOwnProperty lo utilizamos para almacenar el nombre de la propiedad de cada objeto
  if(todoterrenoObject.hasOwnProperty(key)){
    localStorage.setItem(key,todoterrenoObject[key]);
  }
}

// Eliminar elemento localStorage

localStorage.removeItem('color');
localStorage.removeItem('marca')

// Eliminar todo en localStorage

localStorage.clear();