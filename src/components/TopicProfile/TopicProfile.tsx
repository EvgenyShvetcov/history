import { FC } from "react";
import "./TopicProfile.scss";

interface Props {
  topicName: string;
  discription: string;
  url: string;
}

export const TopicProfile: FC<Props> = ({ topicName, discription }) => {
  return (
    <div className="TopicProfile">
      <div className="TopicName">{topicName}</div>
      <div>{discription}</div>
      <div>Линк на переход по айди</div>
    </div>
  );
};
