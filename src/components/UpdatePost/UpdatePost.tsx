import { FC, useCallback, useMemo, useState } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./UpdatePost.scss";
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
                  updatePost({
                    state: { text: textValue, title: titleValue },
                    topicId: param1,
                  });
                  fetchData && navigate(-1);
                }}
              >
                Изменить
              </Button>
              <Button onClick={() => navigate(-1)} size="large">
                Отмена
              </Button>
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
