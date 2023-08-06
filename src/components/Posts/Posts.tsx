import { Link } from "react-router-dom";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { TopicProfile } from "../TopicProfile/TopicProfile";
import "./Posts.scss";
import { Typography } from "@mui/material";
import { FC } from "react";

export const Posts: FC = () => {
  const param1 = window.location.pathname.replace(/[/]subjects\s?[/]/, "");
  const { data, error, isLoading } = allApi.useFetchAllPostsQuery(param1);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <Typography variant="h3">Посты</Typography>
            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className="posts">
              {data &&
                data.map((el) => (
                  <TopicProfile
                    key={el.title}
                    topicName={el.title}
                    discription={el.text}
                    childrenLink={
                      <Link className="TopicLink" to={`/post/${el._id}`}>
                        Перейти к посту {el.title}
                      </Link>
                    }
                  />
                ))}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
