import CommentsModel from "../models/Comments.js";

export const getAll = async (req, res) => {
  try {
    const comments = await CommentsModel.find();
    res.json(comments);
  } catch (e) {
    console.log("Не удалось получить список комментариев.");
  }
};

export const createComment = async (req, res) => {
  try {
    const doc = new CommentsModel({
      Author: req.body.Author,
      text: req.body.text,
      post: req.body.post,
      date: Date.now(),
    });
    const comment = await doc.save();
    res.json({ succsess: true });
  } catch (e) {
    return res.status(400).json({
      message: "Не удалось создать комментарий.",
    });
  }
};
