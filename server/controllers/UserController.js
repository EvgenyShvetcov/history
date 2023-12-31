import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign({ _id: user.id }, "secretKey", { expiresIn: "2d" });

    const { passwordHash, ...UserData } = user._doc;
    res.json({ ...UserData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось зарегистрироваться." });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "Неверный логин или пароль.",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: "Неверный логин или пароль.",
      });
    }

    const token = jwt.sign({ _id: user.id }, "secretKey", { expiresIn: "2d" });
    const { passwordHash, ...UserData } = user._doc;
    res.json({ ...UserData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось авторизоваться." });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден.",
      });
    }
    const { passwordHash, ...UserData } = user._doc;
    res.json({ ...UserData });
  } catch (err) {
    return res.status(500).json({
      message: "Нет доступа.",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    console.log(user);
    if (!user) {
      return res.status(404).json({
        message: "Пользователи не найдены.",
      });
    }

    res.json(user);
  } catch (err) {
    return res.status(500).json({
      message: "Нет доступа.",
    });
  }
};
