import { useEffect } from "react";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { TopicProfile } from "../TopicProfile/TopicProfile";
import "./Subjects.scss";
import { chaptersSlice } from "../../store/redux/chapters";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/redux";

export const Subjects = () => {
  const dispatch = useDispatch();
  const subjects = useSelector((state: RootState) => state.chapters);

  useEffect(() => {
    dispatch(chaptersSlice.actions.getAllChaptersFetch());
  }, [dispatch]);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <h1>Разделы</h1>
            <div className="Subjects">
              {subjects.data.map((el) => (
                <TopicProfile
                  id={el._id}
                  key={el.country}
                  topicName={el.country}
                  discription={el.discription}
                  // url={el.picUrl}
                />
              ))}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};