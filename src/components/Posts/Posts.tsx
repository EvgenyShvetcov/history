import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { TopicProfile } from "../TopicProfile/TopicProfile";
import "./Posts.scss";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

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
            <div className="topPart">
              <div className="topLeftPart">
                <div className="IconBack">
                  <ArrowBack
                    onClick={() => navigate("/subjects")}
                    className="IconBack"
                  />
                </div>
                <Typography variant="h3">Посты</Typography>
              </div>
              {userData.isAuthenticated && (
                <Button
                  className="addButton"
                  onClick={() => navigate(`/addPost/${param1}`)}
                >
                  Добавить пост
                </Button>
              )}
            </div>
            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className="posts">
              {data &&
                data.map((el) => (
                  <TopicProfile
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
