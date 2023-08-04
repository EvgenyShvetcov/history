import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Subjects } from "./components/Subjects/Subjects";
import { ROUTES } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export const App = () => {
  const currentTheme = useSelector((state: RootState) => state.theme);

  return (
    <div className={currentTheme === true ? "DarkApp" : "App"}>
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.subjects} element={<Subjects />} />
      </Routes>
    </div>
  );
};
