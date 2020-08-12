import express from "express";
import gradesRouter from "./routes/grades.js";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

global.fileName = "grades.json";

const app = express();
app.use(express.json());

// Usando router em grades.js para gerenciar a rota
app.use("/grades", gradesRouter);

app.listen(3000, async () => {
  try {
    await readFile("grades.json");
    console.log("API started");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      grades: [],
    };
    writeFile("grades.json", JSON.stringify(initialJson))
      .then(() => {
        console.log("API started and grades.json created");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
