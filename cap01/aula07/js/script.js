var a = 3;
var b = 3;

// if/else

if (a > b) {
  console.log(a + " é maior que " + b);
} else {
  if (a < b) {
    console.log(b + " é maior que " + a);
  } else {
    console.log("Os valores são iguais");
  }
}

var dia = 5;
if (dia === 1) {
  console.log("Domingo");
} else {
  if (dia === 2) {
    console.log("Segunda");
  } else {
    if (dia === 3) {
      console.log("Terça");
    } else {
      if (dia === 4) {
        console.log("Quarta");
      } else {
        if (dia === 5) {
          console.log("Quinta");
        } else {
          if (dia === 6) {
            console.log("Sexta");
          } else {
            if (dia === 7) {
              console.log("Sábado");
            } else {
              console.log("Dia Inválido");
            }
          }
        }
      }
    }
  }
}

// switch

var r = "";
// prettier-ignore
switch(dia){
  case 1: r = "Domingo"; break;
  case 2: r = "Segunda"; break;
  case 3: r = "Terça"; break;
  case 4: r = "Quarta"; break;
  case 5: r = "Quinta"; break;
  case 6: r = "Sexta"; break;
  case 7: r = "sabado"; break;

  default: r = "Dia invalido"
}

console.log(r);

// Operador ternário

var resposta = a > b ? "a maior que b" : a < b ? "a menor b" : "iguais";
console.log(resposta);

var diaSemana =
  dia === 1
    ? "Domingo"
    : dia === 2
    ? "Segunda"
    : dia === 3
    ? "Terça"
    : dia === 4
    ? "Quarta"
    : dia === 5
    ? "Quinta"
    : dia === 6
    ? "Sexta"
    : dia === 7
    ? "Sabado"
    : "Dia inválido";

console.log(diaSemana);

// Somatório com while

var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}

console.log("O somatório dos numeros é " + somatorio);

// Somatório com do... while

var numeroAtual = 1;
var somatorio = 0;

do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);

console.log("O somatório dos numeros é " + somatorio);

// Somatório com for
var somatorio = 0;

for (var i = 1; i <= 10; i++) {
  somatorio += i;
}

console.log("O somatório dos numeros é " + somatorio);
