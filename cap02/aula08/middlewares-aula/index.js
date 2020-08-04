import express from "express";
import carrosRouter from "./carros.js";

const app = express();
app.use(express.json());

// associação em nivel de roteador
app.use("/carros", carrosRouter);

app.use((req, res, next) => {
  console.log(new Date());
  next();
});

app.get("/middleware", (req, res) => {
  res.end();
});

app.listen(3002, () => {
  console.log("API started");
});
