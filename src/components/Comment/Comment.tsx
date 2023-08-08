import { FC } from "react";
import "./Comment.scss";

interface Props {
  User: string;
  text: string;
  date: string;
}

export const Comment: FC<Props> = ({ User, text, date }) => {
  return (
    <div className="comment">
      <div className="commentUserName">{User}</div>
      <div className="commentText">{text}</div>
      <div className="date">{date}</div>
    </div>
  );
};
