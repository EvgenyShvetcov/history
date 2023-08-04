import express from "express";
import mongoose from "mongoose";
import { getAll } from "./controllers/ChaptersController.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

app.listen(PORT, () => {
  console.log("Server has been started...");
});
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to application.");
});

app.get("/subjects", getAll);
