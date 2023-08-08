import PostModel from "../models/Post.js";
import ChaptersModel from "../models/Chapters.js";

export const getAll = async (req, res) => {
  try {
    const postTopic = req.params.topicId;
    const posts = await PostModel.find({ topic: postTopic })
      .populate(["user", "topic"])
      .exec();
    res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось получить статьи.",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;
    await PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      }
    )
      .populate(["user", { path: "comments", populate: ["user"] }])
      .exec()
      .then((doc, err) => {
        if (err) {
          return res.status(500).json({
            message: "Не удалось получить статью.",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Статья не найдена.",
          });
        }

        res.json(doc);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось получить статью.",
    });
  }
};

export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        topic: req.body.topic,
        imageUrl: req.body.imageUrl,
        user: req.userId,
      }
      // {
      //   returnDocument: "after",
      // }
    ).then((doc, err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Не удалось получить статью.",
        });
      }
      if (!doc) {
        return res.status(404).json({
          message: "Статья не найдена.",
        });
      }

      res.json({ success: true });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось получить статью.",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;
    await PostModel.findOneAndDelete({
      _id: postId,
    }).then((doc, err) => {
      if (err) {
        return res.status(500).json({
          message: "Не удалось получить статью.",
        });
      }
      if (!doc) {
        return res.status(404).json({
          message: "Статья не найдена.",
        });
      }

      res.json({
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Не удалось получить статьи.",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      topic: req.body.topic,
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось создать статью.",
    });
  }
};
