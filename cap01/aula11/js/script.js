"use strict";

// var x let

// var tem escopo abrangente
// let tem escopo reduzido

function withVar() {
  for (var i = 0; i <= 10; i++) {
    console.log("var" + i);
  }
  i = 20;
  console.log(20);
}

function withLet() {
  for (let i = 0; i <= 10; i++) {
    console.log("let" + i);
  }
  //i = 20;
  //console.log(i);
}

withVar();
withLet();

// const - não podemos reatribuir valores.

//const c = 10;
//c = 20;

const d = [];
d.push(1);
console.log(d);

// function simples
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

// function anomima
const sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(2, 3));

// arrow function
const sum3 = (a, b) => {
  return a + b;
};

console.log(sum3(2, 3));

// arrow function reduzida
const sum4 = (a, b) => a + b;

console.log(sum4(2, 3));

// template literals
const name = "Pedro";
const surname = "Carvalho";

const text1 = "Meu nome é " + name + " " + surname + ".";
const text2 = `Meu nome é ${name} ${surname}.`;

console.log(text1);
console.log(text2);

// default parameters

// se quiser default parameter no primeiro tem que definer os outros
const sum5 = (a, b = 10) => a + b;

console.log(sum5(2));
