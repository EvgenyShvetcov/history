import { FC } from "react";
import "./TopicProfile.scss";

interface Props {
  topicName: string;
  discription: string;
}

export const TopicProfile: FC<Props> = ({ topicName, discription }) => {
  return (
    <div className="TopicProfile">
      <div className="TopicName">{topicName}</div>
      <div>{discription}</div>
      <div>Ссылка на переход</div>
    </div>
  );
};
