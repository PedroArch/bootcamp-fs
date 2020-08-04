import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const a = 3;
  const b = 5;
  const resultado = soma(a, b);
  res.send("Resultado: " + resultado);
});

// all pega todos os métodos HTTP
app.all("/all", (req, res) => {
  res.send(req.path);
  res.send(req.method);
});

// interrogação ignora o elemento anterior a ele
app.get("/interrogacao?", (req, res) => {
  res.send(req.method);
});

// sinal de soma permite repitir o ultimo elemento anterior
// infinitas vezes
app.get("/soma+", (req, res) => {
  res.send(req.method);
});

// asterisco deixa preencher com qualquer coisa palavras inteiras ou letras
app.get("/aspas*aspas", (req, res) => {
  res.send(req.method);
});

// parenteses agrupa letras qeu contam como uma unidade
app.get("/parenteses(teste)?", (req, res) => {
  res.send(req.method);
});

// mostrando o body com JSON

app.post("/body", (req, res) => {
  console.log(req.body);
  res.send(req.path);
});

// pegando paramentros na rota
app.get("/parametros/:id", (req, res) => {
  res.send(req.params.id);
});

// expressao regular
app.get(/.expressaoregular$/, (req, res) => {
  res.send(req.path);
});

// pegando parametros via query
app.get("/query", (req, res) => {
  res.send(req.query);
});

// next para pular para proxima função
app.get(
  "/next",
  (req, res, next) => {
    console.log("Callback 1");
    next();
  },
  (req, res) => {
    console.log("Callback 2");
    res.end();
  }
);

// next com array
function callback1(_, res, next) {
  console.log("callback 1");
  next();
}
function callback2(_, res, next) {
  console.log("callback 2");
  next();
}

function callback3(_, res, next) {
  console.log("callback 3");
  res.end();
}

app.get("/nextarray", [callback1, callback2, callback3]);

function soma(a, b) {
  const resultado = a + b;
}

// route

app
  .route("/testeroute")
  .get((req, res) => {
    res.send(req.method);
  })
  .post((req, res) => {
    res.send(req.method);
  })
  .delete((req, res) => {
    res.send(req.method);
  });

app.listen(3000, () => {
  console.log("API Started!");
});
