import { allApi } from "../../store/services/Services";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { MemoizedTopicProfile } from "../TopicProfile/TopicProfile";
import style from "./MyProfile.module.scss";
import { Button } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { PageTopSection } from "../PageTopSection/PageTopSection";

export const MyProfile: FC = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.data);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <PageTopSection
              onClickBack={() => navigate(-1)}
              title="Мой профиль"
            />
            <div className={style.myprofile}>
              {userData && userData.user?.fullName}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
