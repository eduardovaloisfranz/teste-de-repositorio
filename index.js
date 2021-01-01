import { isEven } from "./helper.js";
console.log("Ola mundo");
console.log("sem escândalo familia");
console.log(isEven(4));
let currentYear = new Date().getFullYear();
let isHaveLucky = Math.random() < 0.5
console.log(`Hoje estamos no ano de ${currentYear} e o proximo ano será ${currentYear + 1}\nTerá sorte no próximo Ano? ${isHaveLucky ? "Sim, terá sorte no próximo ano :)" : "Não, infelizmente terá que esperar o próximo Ano :("}`)
console.log(`Adeus - ${currentYear}`);