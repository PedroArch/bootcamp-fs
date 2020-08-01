import { promises as fs } from "fs";
import { timeStamp } from "console";

init();
let globalEstados = [];
let globalCidades = [];
let totalCidadesEstado = [];
let maioresCidadesNome = [];
let menoresCidadesNome = [];

async function init() {
  try {
    // Atribuindo Estados.json à variavel globalEstados
    const estadosJson = JSON.parse(await fs.readFile("Estados.json"));
    globalEstados = estadosJson;

    // Atribuindo Cidades.json à variavel globalCidades
    const cidadesJson = JSON.parse(await fs.readFile("Cidades.json"));
    globalCidades = cidadesJson;

    // Criando arquivos JSON e populando com as cidades respectivas das UFs
    globalEstados.forEach((estado) => {
      const currentState = [];
      globalCidades.forEach((cidade) => {
        if (cidade.Estado === estado.ID) {
          currentState.push(cidade);
        }
      });
      fs.writeFile(
        `${estado.Sigla}.json`,
        JSON.stringify(currentState, null, 2)
      );
    });
    // Inicializando array com os estados e o total de cidades
    globalEstados.forEach((estado) => {
      totalCidadesEstado.push({
        UF: `${estado.Sigla}`,
        numeroCidades: 0,
      });
    });

    // Contando o total de cidades
    for (const estado of totalCidadesEstado) {
      estado.numeroCidades = await contadorCidades(`${estado.UF}`);
    }

    // Ordenar por maior e imprimir os 5 estados com mais cidades
    totalCidadesEstado.sort((a, b) => {
      return b.numeroCidades - a.numeroCidades;
    });
    console.log("ESTADOS COM MAIS CIDADES");
    console.log(totalCidadesEstado.slice(0, 5));
    console.log("\n");

    // Ordenar por menor e imprimir os 5 estados com menos cidades
    totalCidadesEstado.sort((a, b) => {
      return a.numeroCidades - b.numeroCidades;
    });
    console.log("ESTADOS COM MENOS CIDADES");
    console.log(totalCidadesEstado.slice(0, 5));
    console.log("\n");

    // Ordena cidades do Maior nome para o menor em cada estado
    for (const estado of globalEstados) {
      const data = JSON.parse(await fs.readFile(`${estado.Sigla}.json`));
      data.sort((a, b) => {
        return b.Nome.length - a.Nome.length;
      });
      const corteNome = data[0].Nome;
      const corteUF = estado.Sigla;
      maioresCidadesNome.push({ Nome: corteNome, UF: corteUF });
    }
    console.log("CIDADES COM MAIORES NOMES");
    console.log(maioresCidadesNome);
    console.log("\n");

    // Ordena cidades do maior nome para o menor em cada estado
    for (const estado of globalEstados) {
      const data = JSON.parse(await fs.readFile(`${estado.Sigla}.json`));
      data.sort((a, b) => {
        return a.Nome.length - b.Nome.length;
      });
      const corteNome = data[0].Nome;
      const corteUF = estado.Sigla;
      menoresCidadesNome.push({ Nome: corteNome, UF: corteUF });
    }
    console.log("CIDADES COM MENORES NOMES");
    console.log(menoresCidadesNome);
    console.log("\n");

    // Captura e imprime a cidade de maior nome
    maioresCidadesNome.sort((a, b) => {
      if (a.Nome.length > b.Nome.length) {
        return -1;
      } else if (a.Nome.length < b.Nome.length) {
        return 1;
      } else {
        if (a.Nome > b.Nome) {
          return 1;
        }
        return -1;
      }
    });
    console.log("CIDADE DE MAIOR NOME");
    console.log(maioresCidadesNome[0]);
    console.log("\n");

    // Captura e imprime a cidade de menor nome
    menoresCidadesNome.sort((a, b) => {
      if (a.Nome.length > b.Nome.length) {
        return 1;
      } else if (a.Nome.length < b.Nome.length) {
        return -1;
      } else {
        if (a.Nome > b.Nome) {
          return 1;
        }
        return -1;
      }
    });
    console.log("CIDADE DE MENOR NOME");
    console.log(menoresCidadesNome[0]);
  } catch (err) {
    console.log(err);
  }
}
// método que conta as cidades das UFs
async function contadorCidades(uf) {
  try {
    const data = JSON.parse(await fs.readFile(`${uf}.json`, "utf-8"));
    const total = data.length;
    return total;
  } catch (err) {
    console.log(err);
  }
}
