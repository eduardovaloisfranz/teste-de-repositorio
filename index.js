import { isEven } from "./helper.js";
console.log("Ola mundo");
console.log("sem escândalo familia");
console.log(isEven(4));
let currentYear = new Date().getFullYear();
let teraSorte = Math.random() < 0.5
console.log(`Hoje estamos no ano de ${currentYear} e o proximo ano será ${currentYear + 1}\nTerá sorte no próximo Ano? ${teraSorte}`)
console.log(`Adeus - ${currentYear}`);