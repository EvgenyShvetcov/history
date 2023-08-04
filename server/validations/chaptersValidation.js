import { body } from "express-validator";

export const chaptersValidation = [
  body("country", "Введите заголовок статьи (минимум 2 символа)")
    .isLength({ min: 2 })
    .isString(),
  body("discription", "Введите описание статьи (минимум 2 символа)")
    .isLength({ min: 2 })
    .isString(),
  body("pictureUrl", "Неверная ссылка на изображение").optional().isString(),
];
