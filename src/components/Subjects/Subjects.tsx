import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { TopicProfile } from "../TopicProfile/TopicProfile";
import "./Subjects.scss";
import { allApi } from "../../store/services/Services";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Subjects = () => {
  const { data, error, isLoading } = allApi.useFetchAllChaptersQuery("");

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
                  <TopicProfile
                    key={el.country}
                    topicName={el.country}
                    discription={el.discription}
                    childrenLink={
                      <Link className="TopicLink" to={`/subjects/${el._id}`}>
                        Перейти в раздел {el.country}
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
