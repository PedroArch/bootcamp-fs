import express from "express";
import winston from "winston";
import accountsRouter from "./routes/accounts.js";
import { promises as fs } from "fs";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const { readFile, writeFile } = fs;
const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-bank.log" }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myFormat),
});

app.use("/account", accountsRouter);

app.listen(3001, async () => {
  try {
    await readFile("accounts.json");
    logger.info("API started!");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    writeFile("accounts.json", JSON.stringify(initialJson))
      .then(() => {
        logger.info("API started and file created!");
      })
      .catch((err) => {
        logger.error(err);
      });
  }
});
