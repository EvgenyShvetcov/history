import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Subjects } from "./components/Subjects/Subjects";
import { ROUTES } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Posts } from "./components/Posts/Posts";
import { Registration } from "./components/Registration/Registration";
import { Login } from "./components/Login/Login";

export const App = () => {
  const currentTheme = useSelector((state: RootState) => state.theme);

  return (
    <div className={currentTheme === true ? "DarkApp" : "App"}>
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.subjects} element={<Subjects />} />
        <Route path={ROUTES.posts} element={<Posts />} />
        <Route path={ROUTES.register} element={<Registration />} />
        <Route path={ROUTES.login} element={<Login />} />
      </Routes>
    </div>
  );
};
