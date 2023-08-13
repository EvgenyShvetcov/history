import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import fs from "fs";
import cors from "cors";

import {
  loginValidation,
  registerValidation,
  postValidation,
  chaptersValidation,
} from "./validations/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import {
  PostController,
  UserController,
  ChaptersController,
  CommentsController,
} from "./controllers/index.js";

const PORT = process.env.PORT || 3000;

const app = express();

mongoose
  .connect("mongodb://127.0.0.1/test", {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

app.listen(PORT, () => {
  console.log("Server has been started...");
});

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("Welcome to application.");
});
app.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getUser);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/posts/:topicId", PostController.getAll);
app.get("/post/:id", PostController.getOne);
app.post("/posts", checkAuth, postValidation, PostController.create);
app.delete("/post/:id", checkAuth, PostController.remove);
app.patch("/post/:id", checkAuth, PostController.update);

app.get("/subjects", ChaptersController.getAll);
app.post(
  "/subjects",
  checkAuth,
  chaptersValidation,
  ChaptersController.createChapter
);

app.post("/comment", checkAuth, CommentsController.createComment);
