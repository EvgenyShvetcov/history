import { FC, useCallback, useMemo, useState } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./AddPost.scss";
import { Button, TextField, Typography } from "@mui/material";

import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export const AddPost: FC = () => {
  const param1 = window.location.pathname.replace(/[/]addPost\s?[/]/, "");
  const [createPost, fetchData] = allApi.useFetchCreatePostMutation();
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
            <div className="topPart">
              <div className="topLeftPart">
                <div className="IconBack">
                  <ArrowBack
                    onClick={() => navigate(-1)}
                    className="IconBack"
                  />
                </div>
                <Typography variant="h3">Добавление поста</Typography>
              </div>
            </div>
            {/* {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"} */}
            <div className="post">
              <div className="postTitle">
                <TextField
                  className="postTitleinput"
                  variant="standard"
                  placeholder="Заголовок статьи..."
                  fullWidth
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  required
                />
              </div>
              <SimpleMDE
                className="postTextEditor"
                value={textValue}
                onChange={onChange}
                options={options}
              />
            </div>
            <div className="bottomButtons">
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  createPost({
                    text: textValue,
                    title: titleValue,
                    topic: param1,
                  });
                  fetchData && navigate(`/subjects/${param1}`);
                }}
              >
                Опубликовать
              </Button>
              <Button
                onClick={() => navigate(`/subjects/${param1}`)}
                size="large"
              >
                Отмена
              </Button>
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
