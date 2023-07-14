import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Theams } from "./components/Theams/Theams";
import { ROUTES } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export const App = () => {
  const currentTheme = useSelector((state: RootState) => state.theme);

  return (
    <div className={currentTheme === true ? "DarkApp" : "App"}>
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.theams} element={<Theams />} />
      </Routes>
    </div>
  );
};
