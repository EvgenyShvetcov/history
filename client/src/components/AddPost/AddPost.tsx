import { FC, useCallback, useMemo, useRef, useState } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./AddPost.scss";
import { Button, TextField } from "@mui/material";

import SimpleMDE from "react-simplemde-editor";

import "easymde/dist/easymde.min.css";
import { useNavigate } from "react-router-dom";
import { PageTopSection } from "../PageTopSection/PageTopSection";

export const AddPost: FC = () => {
  const param1 = window.location.pathname.replace(/[/]addPost\s?[/]/, "");
  const [createPost, fetchData] = allApi.useFetchCreatePostMutation();
  const [upload, fetchUploadData] = allApi.useUploadFileMutation();
  const [textValue, setTextValue] = useState<string>("");
  const [titleValue, setTitleValue] = useState<string>("");

  const navigate = useNavigate();
  const inputRef = useRef<any>(null);

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
            <PageTopSection
              onClickBack={() => navigate(-1)}
              title="Добавление поста"
              children={
                <>
                  <Button
                    onClick={() => inputRef.current.click()}
                    children="Загрузить файл"
                  />
                  <input
                    type="file"
                    ref={inputRef}
                    hidden
                    name="image"
                    onChange={(e) => {
                      upload(e.target.files && e.target.files[0]);
                    }}
                  />
                </>
              }
            />

            {/* {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"} */}
            <div className="post">
              <div className="postTitle">
                {fetchUploadData.data && (
                  <>
                    <img
                      alt="uploaded"
                      src={`http://localhost:3000${fetchUploadData.data.url}`}
                    />
                    <Button
                      onClick={() => upload("")}
                      children="Удалить файл"
                    />
                  </>
                )}
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
                onClick={() => navigate(`/subjects/${param1}`)}
                size="large"
              >
                Отмена
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  createPost({
                    text: textValue,
                    title: titleValue,
                    topic: param1,
                    imageUrl: fetchUploadData.data.url,
                  });
                  fetchData && navigate(`/subjects/${param1}`);
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
