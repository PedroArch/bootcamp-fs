import { promises as fs } from "fs";

let globalEstados = [];
let globalCidades = [];
let globalEstadosCidades = [];
let arrayTotalCidades = [];

async function start() {
  await importEstados();
  await importCidades();
  await mergeEstadosCidade();
  await createEstadosJson();
  await fs.readFile("RS.json", "utf-8");
  await maioresEstados();
  await fs.readFile("RS.json", "utf-8");
  await console.log(arrayTotalCidades.length);
}

async function importEstados() {
  try {
    const data = JSON.parse(await fs.readFile("Estados.json", "utf-8"));
    globalEstados = [...globalEstados, ...data];
  } catch (err) {
    console.log(err);
  }
}

async function importCidades() {
  try {
    const data = JSON.parse(await fs.readFile("Cidades.json", "utf-8"));
    globalCidades = [...globalCidades, ...data];
  } catch (err) {
    console.log(err);
  }
}

async function mergeEstadosCidade() {
  globalCidades.forEach((cidade) => {
    const estado = globalEstados.find((estado) => estado.ID === cidade.Estado);
    globalEstadosCidades.push({ ...cidade, NomeEstado: estado.Nome });
  });
}

async function createEstadosJson() {
  try {
    globalEstados.forEach(async (estado) => {
      await fs.writeFile(`${estado.Sigla}.json`, "");
      const currentEstado = [];
      for (let i = 0; i < globalEstadosCidades.length; i++) {
        if ((await estado.Nome) === globalEstadosCidades[i].NomeEstado) {
          currentEstado.push(globalEstadosCidades[i]);
        }
      }
      await fs.appendFile(
        `${estado.Sigla}.json`,
        JSON.stringify(currentEstado)
      );
    });
  } catch (err) {
    console.log(err);
  }
}

async function countCidades(UF) {
  try {
    const estado = JSON.parse(await fs.readFile(UF + ".json"));
    return estado.length;
    // const estado = await fs.readFile(UF + ".json", "utf-8");
    // const objEstado = JSON.parse(estado);
    // const totalCidades = objEstado.length;
    // return totalCidades;
  } catch (err) {
    console.log(err);
  }
}

async function maioresEstados() {
  try {
    globalEstados.forEach(async (estado) => {
      let contador = await countCidades(estado.Sigla);
      await arrayTotalCidades.push({
        estado: `${estado.Sigla}`,
        numeroCidades: `${contador}`,
      });
    });
  } catch (err) {
    console.log(err);
  }
  await console.log(arrayTotalCidades);
}

start();
