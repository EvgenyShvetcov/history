import { FC, useState } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./PostCard.scss";
import { Button } from "@mui/material";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "../ui-kit/Modal";
import { PageTopSection } from "../PageTopSection/PageTopSection";
import { CommentSection } from "../CommentSection/CommentSection";

export const PostCard: FC = () => {
  const param1 = window.location.pathname.replace(/[/]post\s?[/]/, "");
  const { data, error, isLoading } = allApi.useFetchOnePostQuery(param1);
  const [deletePost, fetchData] = allApi.useFetchDeletePostMutation();
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.data);
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            {/* Модалка на удаление, доработать */}
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
            <PageTopSection
              children={
                userData.user?._id === data?.user._id ? (
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
                ) : (
                  <div></div>
                )
              }
              onClickBack={() => navigate(-1)}
              title={data?.title || ""}
            />

            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className="post">
              <div className="text">{data?.text}</div>
              <img
                alt="uploaded"
                src={`http://localhost:3000${data?.imageUrl}`}
              />
              <div className="additionalInfo">
                <div>{"Статья пользователя " + data?.user.fullName}</div>
                <div>{"Количество просмотров: " + data?.viewsCount}</div>
              </div>

              <CommentSection User={userData.user} data={data} />
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
