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

const furgoneta1 = new Furgoneta("Mercedes", "Citan", "Gris", 2022, 2000, 8);
mostrarResultado(`<h2>--Vehículo 2 Furgoneta--</h2>`);
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(60);
furgoneta1.frenar();

const todoterreno1 = new Todoterreno("Range Rover", "Defender", "Negro", 2023, 2030, true);
mostrarResultado(`<h2>--Vehículo 3 Todoterreno--</h2>`);
todoterreno1.mostrarDatos();
todoterreno1.arrancar();
todoterreno1.acelerar(70);
todoterreno1.frenar();
