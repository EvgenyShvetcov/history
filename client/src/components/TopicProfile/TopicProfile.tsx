import React, { FC } from "react";
import style from "./TopicProfile.module.scss";
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
    <Link to={childrenLink} className={style.link}>
      <div className={style.TopicProfile}>
        <div className={style.TopicName}>{topicName}</div>
        <div className={style.TopicDiscription}>{discription}</div>
      </div>
    </Link>
  );
};

export const MemoizedTopicProfile = React.memo(TopicProfile);
