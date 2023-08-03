import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import { TopicProfile } from "../TopicProfile/TopicProfile";
import "./Theams.scss";

export const Theams = () => {
  const theams = [
    { topicName: "Россия", discription: "Тут будет описание ...", picUrl: "" },
    { topicName: "Китай", discription: "Тут будет описание ...", picUrl: "" },
  ];
  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <h1>Разделы</h1>
            <div>
              {theams.map((el) => (
                <TopicProfile
                  key={el.topicName}
                  topicName={el.topicName}
                  discription={el.discription}
                  url={el.picUrl}
                />
              ))}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
