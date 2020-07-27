//import fs from "fs";
/*
//Forma Default de utilização com callbacks
fs.writeFile("teste.txt", "write funcionando...", function (err) {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile("teste.txt", " tentando incluir mais texto", function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Arquivo escrito com sucesso.");
        fs.readFile("teste.txt", "utf-8", function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
*/

/*
// Forma sincrono (evitar por bloquear a thread main do Node)
try {
  console.log("1");
  fs.writeFileSync("teste2.txt", "writing 2 funcionando");
  const data = fs.readFileSync("teste2.txt", "utf-8");
  console.log("2");
  console.log(data);
  console.log("3");
} catch (err) {
  console.log(err);
} */

// Forma com promises
/*
import { promises as fs, writeFile, readFile } from "fs";

fs.writeFile("teste3.txt", "wrinting 3 funcionando")
  .then(() => {
    fs.appendFile("teste3.txt", " incluindo novo apend")
      .then(() => {
        fs.readFile("teste3.txt", "utf-8")
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  }); */

// Usando async await
import { promises as fs } from "fs";

async function init() {
  try {
    await fs.writeFile("teste4.txt", "Wrinting 4 funcionando");
    await fs.appendFile("teste4.txt", " incluindo apend");
    const data = await fs.readFile("teste4.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
init();

async function writeReadJSON() {
  try {
    const arrayCarros = ["Gol", "Palio", "Uno"];
    const objCarros = {
      carros: arrayCarros,
    };
    // Escrevemos o arquivo
    await fs.writeFile("carros.json", JSON.stringify(objCarros));

    // Fizemos a leitura do arquivo
    const data = JSON.parse(await fs.readFile("carros.json"));

    // Alteramos o conteúdo
    data.carros.push("Sandero");

    // Reescrevemos o conteudo com o conteudo atual
    await fs.writeFile("carros.json", JSON.stringify(data));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

writeReadJSON();
