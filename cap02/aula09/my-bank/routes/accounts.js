import express from "express";
import { promises as fs, write } from "fs";

const { readFile, writeFile } = fs;
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let account = req.body;

    if (!account.name || account.balance == null) {
      throw new Error("Name e balance obrigatórios");
    }

    let data = JSON.parse(await readFile("accounts.json"));

    account = {
      id: data.nextId++,
      name: account.name,
      balance: account.balance,
    };
    data.accounts.push(account);

    await writeFile("accounts.json", JSON.stringify(data, null, 2));

    delete data.nextId;

    res.send(data);

    logger.info(`POST /account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile("accounts.json"));
    delete data.nextId;
    res.send(data);
    logger.info(`GET /account`);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile("accounts.json"));
    const account = data.accounts.find(
      (account) => account.id === parseInt(req.params.id)
    );
    res.send(account);
    logger.info(`GET /account/${req.params.id}`);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile("accounts.json"));
    data.accounts = data.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    );
    res.end();
    await writeFile("accounts.json", JSON.stringify(data, null, 2));

    logger.info(`DELETE /account/${req.params.id} - ${req.params.id}`);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const account = req.body;
    const data = JSON.parse(await readFile("accounts.json"));
    const index = data.accounts.findIndex((acc) => acc.id === account.id);

    if (!account.id || !account.name || account.balance == null) {
      throw new Error("Id, name e balance obrigatórios");
    }

    if (index === -1) {
      throw new Error("Registro não encontrado");
    }
    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;

    await writeFile("accounts.json", JSON.stringify(data, null, 2));
    res.send(account);
    logger.info(`PUTT /account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.patch("/updateBalance", async (req, res, next) => {
  try {
    const account = req.body;
    const data = JSON.parse(await readFile("accounts.json"));
    const index = data.accounts.findIndex((acc) => acc.id === account.id);

    if (!account.id || account.balance == null) {
      throw new Error("Id e balance obrigatórios");
    }

    if (index === -1) {
      throw new Error("Registro não encontrado");
    }
    data.accounts[index].balance = account.balance;

    await writeFile("accounts.json", JSON.stringify(data, null, 2));
    res.send(data.accounts[index]);
    logger.info(`PATCH /account/updateBalance - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} ${err.message}`);
  console.log(err);
  res.status(400).send({ error: err.message });
});

export default router;
