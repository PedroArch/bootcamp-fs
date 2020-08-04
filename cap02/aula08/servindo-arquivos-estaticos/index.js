import express from "express";
const app = express();
app.use(express.json());

// acessando direto
app.use(express.static("img"));

// pasta virtual
app.use("/images", express.static("img"));

app.listen(3001, () => {
  console.log("API started");
});
