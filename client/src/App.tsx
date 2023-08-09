import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Subjects } from "./components/Subjects/Subjects";
import { ROUTES } from "./routes";
import { Posts } from "./components/Posts/Posts";
import { Registration } from "./components/Registration/Registration";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { allApi } from "./store/services/Services";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuthSlice } from "./store/redux/auth";
import { PostCard } from "./components/PostCard/PostCard";
import { AddPost } from "./components/AddPost/AddPost";
import { UpdatePost } from "./components/UpdatePost/UpdatePost";

export const App = () => {
  const dispatch = useDispatch();

  const { data } = allApi.useFetchUserQuery("");

  useEffect(() => {
    data
      ? dispatch(
          getAuthSlice.actions.getAuthData({
            user: data,
            isAuthenticated: true,
          })
        )
      : dispatch(
          getAuthSlice.actions.getAuthData({
            user: null,
            isAuthenticated: false,
          })
        );
  }, [data, dispatch]);
  return (
    <div className={"App"}>
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.subjects} element={<Subjects />} />
        <Route path={ROUTES.posts} element={<Posts />} />
        <Route path={ROUTES.register} element={<Registration />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.logout} element={<Logout />} />
        <Route path={ROUTES.card} element={<PostCard />} />
        <Route path={ROUTES.addPost} element={<AddPost />} />
        <Route path={ROUTES.updatePost} element={<UpdatePost />} />
      </Routes>
    </div>
  );
};
