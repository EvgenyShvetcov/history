import { useEffect } from "react";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./Posts.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/redux";
import { postsSlice } from "../../store/redux/posts";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    const param1 = window.location.pathname.replace(/[/]subjects\s?[/]/, "");

    dispatch(postsSlice.actions.getAllPostsFetch(param1));
  }, [dispatch]);

  return (
    <div>
      <DefaultLayout
        children={
          <div>
            <h1>Посты:</h1>
            <div className="Subjects">
              {posts.data.map((el) => (
                <div key={el.title}>
                  <div>{el.title}</div>
                  <div>{el.text}</div>
                </div>
              ))}
            </div>
          </div>
        }
      ></DefaultLayout>
    </div>
  );
};
