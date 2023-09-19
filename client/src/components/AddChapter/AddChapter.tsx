import { FC, useCallback, useMemo, useState } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import style from "./AddChapter.module.scss";
import { Button, TextField, Typography } from "@mui/material";

import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export const AddChapter: FC = () => {
  const [createChapter, fetchData] = allApi.usePostChapterMutation();
  const [textValue, setTextValue] = useState<string>("");
  const [titleValue, setTitleValue] = useState<string>("");
  const navigate = useNavigate();

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
    }),
    []
  );

  const onChange = useCallback((value: string) => {
    setTextValue(value);
  }, []);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <div className={style.topPart}>
              <div className={style.topLeftPart}>
                <div className={style.IconBack}>
                  <ArrowBack
                    onClick={() => navigate("/subjects")}
                    className={style.IconBack}
                  />
                </div>
                <Typography variant="h3">Добавление раздела</Typography>
              </div>
            </div>
            {/* {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"} */}
            <div className={style.post}>
              <div className={style.postTitle}>
                <TextField
                  className={style.postTitleinput}
                  variant="standard"
                  placeholder="Заголовок раздела..."
                  fullWidth
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  required
                />
              </div>
              <SimpleMDE
                className={style.postTextEditor}
                value={textValue}
                onChange={onChange}
                options={options}
              />
            </div>
            <div className={style.bottomButtons}>
              <Button onClick={() => navigate(`/subjects`)} size="large">
                Отмена
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  createChapter({
                    country: titleValue,
                    discription: textValue,
                  });
                  fetchData && navigate(`/subjects`);
                }}
              >
                Опубликовать
              </Button>
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
