import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { MemoizedTopicProfile } from "../TopicProfile/TopicProfile";
import "./Subjects.scss";
import { allApi } from "../../store/services/Services";

import { PageTopSection } from "../PageTopSection/PageTopSection";
import { Button } from "@mui/material";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

export const Subjects: FC = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.auth.data);
  const { data, error, isLoading } = allApi.useFetchAllChaptersQuery("", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <DefaultLayout
        children={
          <div className="">
            <PageTopSection
              children={
                userData.isAuthenticated ? (
                  <Button
                    className="addButton"
                    onClick={() => navigate(`/addChapter`)}
                  >
                    Добавить раздел
                  </Button>
                ) : (
                  <div></div>
                )
              }
              onClickBack={() => navigate("/")}
              title="Разделы"
            />
            {isLoading && "Идет загрузка..."}
            {error && "Ошибка загрузки"}
            <div className="subjects">
              {data &&
                data.map((el) => (
                  <MemoizedTopicProfile
                    key={el.country}
                    topicName={el.country}
                    discription={el.discription}
                    childrenLink={`/subjects/${el._id}`}
                  />
                ))}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
