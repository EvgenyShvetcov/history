import { FC } from "react";
import "./TopicProfile.scss";
import { Link } from "react-router-dom";

interface Props {
  topicName: string;
  discription: string;
  url?: string;
  childrenLink: string;
}

export const TopicProfile: FC<Props> = ({
  topicName,
  discription,
  childrenLink,
}) => {
  return (
    <Link to={childrenLink} className="link">
      <div className="TopicProfile">
        <div className="TopicName">{topicName}</div>
        <div className="TopicDiscription">{discription}</div>
      </div>
    </Link>
  );
};
