import Chapters from "../models/Chapters.js";

export const getAll = async (req, res) => {
  try {
    const chapters = await Chapters.find();
    res.json(chapters);
  } catch (e) {
    console.log("Не удалось получить список глав.");
  }
};
