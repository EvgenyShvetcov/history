import React, { FC } from "react";
import style from "./CommentComponent.module.scss";

interface Props {
  User: string;
  text: string;
  date: string;
}

export const CommentComponent: FC<Props> = ({ User, text, date }) => {
  return (
    <div className={style.comment}>
      <div className={style.commentUserName}>{User}</div>
      <div className={style.commentText}>{text}</div>
      <div className={style.date}>{date}</div>
    </div>
  );
};

export const MemoizedCommentComponent = React.memo(CommentComponent);
