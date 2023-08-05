import { FC } from "react";
import "./TopicProfile.scss";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  topicName: string;
  discription: string;
  url?: string;
}

export const TopicProfile: FC<Props> = ({ topicName, discription, id }) => {
  return (
    <div className="TopicProfile">
      <div className="TopicName">{topicName}</div>
      <div className="TopicDiscription">{discription}</div>
      <Link className="TopicLink" to={`/subjects/${id}`}>
        Линк на переход по айди
      </Link>
    </div>
  );
};
