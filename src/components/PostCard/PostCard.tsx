import { FC } from "react";
import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./PostCard.scss";
import { Typography } from "@mui/material";

export const PostCard: FC = () => {
  const param1 = window.location.pathname.replace(/[/]post\s?[/]/, "");
  const { data, error, isLoading } = allApi.useFetchOnePostQuery(param1);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <Typography variant="h3">{data?.title}</Typography>
            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className="post">
              <div className="text">{data?.text}</div>
              <div className="additionalInfo">
                <div>{"Статья пользователя " + data?.user.fullName}</div>
                <div>{"Количество просмотров: " + data?.viewsCount}</div>
              </div>
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
