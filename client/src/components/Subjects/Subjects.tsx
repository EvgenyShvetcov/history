import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { MemoizedTopicProfile } from "../TopicProfile/TopicProfile";
import "./Subjects.scss";
import { allApi } from "../../store/services/Services";
import { Typography } from "@mui/material";

export const Subjects = () => {
  const { data, error, isLoading } = allApi.useFetchAllChaptersQuery("", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <DefaultLayout
        children={
          <div className="">
            <Typography variant="h3">Разделы</Typography>
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
