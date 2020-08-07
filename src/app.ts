import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import helmet from "helmet";
import { pool } from "../config";

dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};
//app middleware
app.use(helmet());
app.use(cors(corsOptions));

// parse requests of content-type - application/json and application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "A successful request." });
});

const getBooks = (req: Request, res: Response) => {
  pool.query("SELECT * FROM books", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addBook = (req: Request, res: Response) => {
  const { author, title } = req.body;
  pool.query(
    "INSERT INTO books (author, title) VALUES ($1, $2)",
    [author, title],
    (error) => {
      if (error) {
        throw error;
      }
      res.status(201).json({ status: "success", message: "Book added." });
    }
  );
};

app
  .route("/books")
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook);

export default app;
