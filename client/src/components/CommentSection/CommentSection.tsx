import { FC, useState } from "react";
import style from "./CommentSection.module.scss";
import { PostState, UserState } from "../../interfaces";
import { MemoizedCommentComponent } from "../CommentComponent/CommentComponent";
import { Button, Input } from "@mui/material";
import { allApi } from "../../store/services/Services";

interface Props {
  data: PostState | undefined;
  User: UserState | null;
}

export const CommentSection: FC<Props> = ({ data, User }) => {
  console.log(data?.comments);
  const [createComment, commentFetchData] =
    allApi.useFetchCreateCommentMutation();
  const [currentComment, setCurrentComment] = useState<string>("");
  return (
    <div className={style.comments}>
      {data && data.comments.length !== 0
        ? data.comments.map((el) => (
            <MemoizedCommentComponent
              key={el.date}
              text={el.text}
              User={el.user?.fullName || ""}
              date={el.date}
            />
          ))
        : "Комментариев пока нет."}
      {User && (
        <div className={style.addCommentSection}>
          <Input
            fullWidth
            value={currentComment}
            onChange={(e) => setCurrentComment(e.target.value)}
          />
          <Button
            className={style.addButton}
            onClick={() => {
              createComment({
                text: currentComment,
                Author: User?._id || "",
                post: data?._id || "",
              });
              setCurrentComment("");
            }}
          >
            Прокомментировать
          </Button>
        </div>
      )}
    </div>
  );
};
