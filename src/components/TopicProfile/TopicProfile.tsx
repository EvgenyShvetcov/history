import { FC } from "react";
import "./TopicProfile.scss";
import { Link } from "react-router-dom";

interface Props {
  topicName: string;
  discription: string;
  url?: string;
}

export const TopicProfile: FC<Props> = ({ topicName, discription }) => {
  return (
    <div className="TopicProfile">
      <div className="TopicName">{topicName}</div>
      <div className="TopicDiscription">{discription}</div>
      <Link className="TopicLink" to={`/subjects/${topicName}`}>
        Линк на переход по айди
      </Link>
    </div>
  );
};
