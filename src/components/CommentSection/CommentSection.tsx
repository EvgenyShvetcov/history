import { FC, useState } from "react";
import "./CommentSection.scss";
import { Comment, PostState, UserState } from "../../interfaces";
import { CommentComponent } from "../CommentComponent/CommentComponent";
import { Button, Input } from "@mui/material";
import { allApi } from "../../store/services/Services";

interface Props {
  data: PostState | undefined;
  User: UserState | null;
}

export const CommentSection: FC<Props> = ({ data, User }) => {
  const [createComment, commentFetchData] =
    allApi.useFetchCreateCommentMutation();
  const [currentComment, setCurrentComment] = useState<string>("");
  return (
    <div className="comments">
      {data && data.comments
        ? data.comments.map((el) => (
            <CommentComponent
              text={el.text}
              User={el.user?.fullName || ""}
              date={el.date}
            />
          ))
        : "Комментариев пока нет."}
      {User && (
        <div className="addCommentSection">
          <Input
            fullWidth
            value={currentComment}
            onChange={(e) => setCurrentComment(e.target.value)}
          />
          <Button
            className="addButton"
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
