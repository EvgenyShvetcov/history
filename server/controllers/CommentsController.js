import CommentsModel from "../models/Comments.js";
import PostModel from "../models/Post.js";

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
      user: req.body.Author,
      text: req.body.text,
      post: req.body.post,
      date: Date.now(),
    });
    const comment = await doc.save();

    console.log(comment);

    const post = await PostModel.findOneAndUpdate(
      {
        _id: req.body.post,
      },
      {
        $push: { comments: comment._id },
      },
      { new: true },
      {
        returnDocument: "after",
      }
    );

    res.json({ succsess: true });
  } catch (e) {
    return res.status(400).json({
      message: "Не удалось создать комментарий.",
    });
  }
};
