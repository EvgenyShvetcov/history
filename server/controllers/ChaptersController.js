import ChaptersModel from "../models/Chapters.js";

export const getAll = async (req, res) => {
  try {
    const chapters = await ChaptersModel.find();
    res.json(chapters);
  } catch (e) {
    console.log("Не удалось получить список глав.");
  }
};

export const createChapter = async (req, res) => {
  try {
    const doc = new ChaptersModel({
      country: req.body.country,
      discription: req.body.discription,
      pictureUrl: req.body.pictureUrl,
    });
    const chapter = await doc.save();
    console.log(chapter);
    res.json({ succsess: true });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      message: "Не удалось создать главу.",
    });
  }
};
