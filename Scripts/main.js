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

// Muestra de un objeto vehículo

const vehiculo1 = new Vehiculo("Toyota", "Yaris", "Rojo", 2011, 1200);
mostrarResultado(`<h2>--Vehículo 1--</h2>`);
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(90);
vehiculo1.frenar();

const vehiculo2 = new Furgoneta("Mercedes", "Citan", "Gris", 2022, 2000, 8);
mostrarResultado(`<h2>--Vehículo 2 Furgoneta--</h2>`);
vehiculo2.mostrarDatos();
vehiculo2.arrancar();
vehiculo2.acelerar(60);
vehiculo2.frenar();

const vehiculo3 = new Todoterreno("Range Rover", "Defender", "Negro", 2023, 2030, true);
mostrarResultado(`<h2>--Vehículo 3 Todoterreno--</h2>`);
vehiculo3.mostrarDatos();
vehiculo3.arrancar();
vehiculo3.acelerar(70);
vehiculo3.frenar();
