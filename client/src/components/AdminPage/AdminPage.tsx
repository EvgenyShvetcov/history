import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import style from "./AdminPage.module.scss";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { PageTopSection } from "../PageTopSection/PageTopSection";
import { UserState } from "../../interfaces";

export const AdminPage: FC = () => {
  // const param1 = window.location.pathname.replace(/[/]subjects\s?[/]/, "");
  const { data, error, isLoading } = allApi.useFetchAllUsersQuery("");
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.data);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <PageTopSection
              onClickBack={() => navigate("/")}
              title="Панель администратора"
            />
            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className={style.myprofile}>
              {data && data.map((el: UserState) => <div>{el.fullName}</div>)}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
