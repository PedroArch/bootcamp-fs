// Importação default podemos botar o nome que quiser(common.ES)
/*
var operacoes = require("./operacao01.js");
var mult = require("./operacao02.js");

console.log(operacoes.soma(2, 3));
console.log(operacoes.subtracao(5, 3));
console.log(mult(5, 3));
*/

// Importação default (import/export) requer a inclusao no package.json
// de type: "module"
import { expo } from "./operacao04.js"; //nomeada
import resto from "./operacao03.js";
console.log(expo(2, 3));
console.log(resto(7, 2));
