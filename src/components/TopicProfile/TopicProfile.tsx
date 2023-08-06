import { FC } from "react";
import "./TopicProfile.scss";

interface Props {
  topicName: string;
  discription: string;
  url?: string;
  childrenLink?: React.ReactNode;
}

export const TopicProfile: FC<Props> = ({
  topicName,
  discription,
  childrenLink,
}) => {
  return (
    <div className="TopicProfile">
      <div className="TopicName">{topicName}</div>
      <div className="TopicDiscription">{discription}</div>
      <div className="TopicLink"> {childrenLink}</div>
    </div>
  );
};
