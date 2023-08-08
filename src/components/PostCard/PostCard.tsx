import { FC, useState } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./PostCard.scss";
import { Button, Input, Typography } from "@mui/material";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Modal } from "../ui-kit/Modal";
import { Comment } from "../Comment/Comment";

export const PostCard: FC = () => {
  const param1 = window.location.pathname.replace(/[/]post\s?[/]/, "");
  const { data, error, isLoading } = allApi.useFetchOnePostQuery(param1);
  const [deletePost, fetchData] = allApi.useFetchDeletePostMutation();
  const [createComment, commentFetchData] =
    allApi.useFetchCreateCommentMutation();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.data);
  const [active, setActive] = useState<boolean>(false);
  const [currentComment, setCurrentComment] = useState<string>("");

  console.log(data?.comments);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <Modal
              active={active}
              setActive={setActive}
              children={
                <div>
                  <Button
                    onClick={() => setActive(false)}
                    className="addButton"
                  >
                    Назад
                  </Button>
                  <Button
                    onClick={() => {
                      deletePost(param1);
                      navigate(-1);
                    }}
                    className="sureDeleteButton"
                  >
                    Удалить пост
                  </Button>
                </div>
              }
            />
            <div className="topPart">
              <div className="topLeftPart">
                <div className="IconBack">
                  <ArrowBack
                    onClick={() => navigate(-1)}
                    className="IconBack"
                  />
                </div>
                <Typography variant="h3">{data?.title}</Typography>
              </div>
              {userData.user?._id === data?.user._id && (
                <div>
                  <Button
                    onClick={() =>
                      data?._id && navigate(`/updatePost/${data?._id}`)
                    }
                    className="addButton"
                  >
                    Изменить пост
                  </Button>
                  <Button
                    className="deleteButton"
                    onClick={() => setActive(true)}
                  >
                    Удалить пост
                  </Button>
                </div>
              )}
            </div>
            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className="post">
              <div className="text">{data?.text}</div>
              <div className="additionalInfo">
                <div>{"Статья пользователя " + data?.user.fullName}</div>
                <div>{"Количество просмотров: " + data?.viewsCount}</div>
              </div>
              <div className="comments">
                {data?.comments
                  ? data.comments.map((el) => (
                      <Comment
                        text={el.text}
                        User={el.user.fullName}
                        date={el.date}
                      />
                    ))
                  : "Комментариев пока нет."}
                {userData.user && (
                  <div className="addCommentSection">
                    <Input
                      fullWidth
                      value={currentComment}
                      onChange={(e) => setCurrentComment(e.target.value)}
                    />
                    <Button
                      className="addButton"
                      onClick={() =>
                        createComment({
                          text: currentComment,
                          Author: userData.user?._id || "",
                          post: data?._id || "",
                        })
                      }
                    >
                      Прокомментировать
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
