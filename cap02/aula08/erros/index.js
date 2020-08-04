import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("Ocorreu um erro.");
});

app.post("/erro-async", async (req, res, next) => {
  try {
    throw new Error("Ocorreu um erro async.");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log("Erro I");
  next(err);
});

app.use((err, req, res, next) => {
  console.log("Erro II");
  res.status(500).send("Erro de status 500");
});

app.listen(3001, () => {
  console.log("API started...");
});
