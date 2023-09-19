import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import style from "./UpdatePost.module.scss";
import { Button, TextField, Typography } from "@mui/material";

import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export const UpdatePost: FC = () => {
  const param1 = window.location.pathname.replace(/[/]updatePost\s?[/]/, "");
  const [updatePost, fetchData] = allApi.useFetchUpdatePostMutation();
  const { data } = allApi.useFetchOnePostQuery(param1);
  const [textValue, setTextValue] = useState<string>(data?.text || "");
  const [titleValue, setTitleValue] = useState<string>(data?.title || "");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData.isSuccess && navigate(`/post/${param1}`);
  }, [fetchData]);

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
                    onClick={() => navigate(-1)}
                    className={style.IconBack}
                  />
                </div>
                <Typography variant="h3">Изменение поста</Typography>
              </div>
            </div>
            {/* {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"} */}
            <div className={style.post}>
              <div className={style.postTitle}>
                <TextField
                  className={style.postTitleinput}
                  variant="standard"
                  placeholder="Заголовок статьи..."
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
              <Button onClick={() => navigate(-1)} size="large">
                Отмена
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  updatePost({
                    state: { text: textValue, title: titleValue },
                    topicId: param1,
                  });
                }}
              >
                Изменить
              </Button>
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
