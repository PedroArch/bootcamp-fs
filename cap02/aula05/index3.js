//  readLine
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
function pergunta() {
  rl.question("Digite um número: ", (numero) => {
    console.log(numero);
    //pergunta();
    rl.close();
  });
}

pergunta(); */

function multUpTo() {
  rl.question("Quer os multiplos até qual número? ", (numero) => {
    if (parseInt(numero) === -1) {
      rl.close();
    } else {
      const multiplos = [];
      for (let i = 1; i <= parseInt(numero); i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          multiplos.push(i);
        }
      }
      console.log(multiplos);
      multUpTo();
    }
  });
}

multUpTo();
