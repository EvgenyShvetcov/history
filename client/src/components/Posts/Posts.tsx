import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { MemoizedTopicProfile } from "../TopicProfile/TopicProfile";
import style from "./Posts.module.scss";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { PageTopSection } from "../PageTopSection/PageTopSection";

export const Posts: FC = () => {
  const param1 = window.location.pathname.replace(/[/]subjects\s?[/]/, "");
  const { data, error, isLoading } = allApi.useFetchAllPostsQuery(param1);
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.data);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <PageTopSection
              children={
                userData.isAuthenticated ? (
                  <Button
                    className={style.addButton}
                    onClick={() => navigate(`/addPost/${param1}`)}
                  >
                    Добавить пост
                  </Button>
                ) : (
                  <div></div>
                )
              }
              onClickBack={() => navigate("/subjects")}
              title="Посты"
            />
            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className={style.posts}>
              {data &&
                data.map((el) => (
                  <MemoizedTopicProfile
                    key={el.title}
                    topicName={el.title}
                    discription={el.text}
                    childrenLink={`/post/${el._id}`}
                  />
                ))}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
