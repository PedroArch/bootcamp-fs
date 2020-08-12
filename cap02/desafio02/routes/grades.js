import express from "express";
import { promises as fs, write } from "fs";
import { timeStamp } from "console";
import { send } from "process";

const { readFile, writeFile } = fs;

const router = express.Router();

router.get("/", async (_req, res) => {
  const grades = JSON.parse(await readFile(fileName));
  res.send(grades);
});

router.get("/:id", async (req, res) => {
  const data = JSON.parse(await readFile(fileName));
  const id = req.params.id;
  const currentGrade = data.grades.find((grade) => grade.id == id);
  res.send(currentGrade);
});

router.post("/", async (req, res) => {
  const data = JSON.parse(await readFile(global.fileName));
  let newGrade = req.body;
  const timestamp = new Date();
  timestamp.getTime();
  newGrade = {
    id: data.nextId++,
    ...newGrade,
    timestamp: timestamp,
  };
  data.grades.push(newGrade);

  await writeFile(global.fileName, JSON.stringify(data, null, 2));

  res.send(newGrade);
});

router.put("/:id", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));

    const index = data.grades.findIndex(
      (grade) => grade.id === parseInt(req.params.id)
    );

    data.grades[index].student = req.body.studant;
    data.grades[index].subject = req.body.subject;
    data.grades[index].type = req.body.type;
    data.grades[index].value = req.body.value;

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
    res.send(data.grades[index]);
  } catch (err) {
    console.log("Esse id não existe");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = JSON.parse(await readFile(global.fileName));
    data.grades = data.grades.filter(
      (grade) => grade.id !== parseInt(req.params.id)
    );

    console.log(data);

    await writeFile(fileName, JSON.stringify(data, null, 2));

    res.send(`Registro ${req.params.id} apagado com sucesso`);
  } catch (err) {
    console.log(err);
  }
});

// nota total de estudante por matéria
router.post("/totalGrades/", async (req, res) => {
  try {
    let data = JSON.parse(await readFile(global.fileName));
    let student = data.grades.filter(
      (grade) =>
        grade.student === req.body.student && grade.subject === req.body.subject
    );

    let totalGrade = 0;

    for (const item of student) {
      totalGrade += item.value;
    }

    const resultadoFinal = {
      name: student[0].student,
      subject: student[0].subject,
      totalGrade: totalGrade,
    };
    res.send(resultadoFinal);
  } catch (err) {
    console.log(err);
  }
});

// nota media dos estudantes por matéria
router.post("/mediaTotal/", async (req, res) => {
  try {
    let data = JSON.parse(await readFile(global.fileName));
    let subjectType = data.grades.filter(
      (grade) =>
        grade.subject === req.body.subject && grade.type === req.body.type
    );

    let totalGrade = 0;

    for (const item of subjectType) {
      totalGrade += item.value;
    }

    let mediaTotal = totalGrade / subjectType.length;

    const resultadoFinal = {
      subject: subjectType[0].subject,
      type: subjectType[0].type,
      mediaTotal: mediaTotal,
    };

    res.send(resultadoFinal);
  } catch (err) {
    console.log(err);
  }
});

// três maiores notas dos estudantes por matéria e tipo
router.post("/topGrades/", async (req, res) => {
  try {
    let data = JSON.parse(await readFile(global.fileName));
    let subjectType = data.grades.filter(
      (grade) =>
        grade.subject === req.body.subject && grade.type === req.body.type
    );

    let topGrades = subjectType.sort((a, b) => {
      if (a.value > b.value) {
        return -1;
      }
      if (b.value > a.value) {
        return 1;
      }
      return 0;
    });

    topGrades = topGrades.slice(0, 3);

    res.send(topGrades);
  } catch (err) {
    console.log(err);
  }
});

export default router;
