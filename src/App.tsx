import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Theams } from "./components/Theams/Theams";
import { ROUTES } from "./routes";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSlice } from "./store/redux/theme";

export const App = () => {
  const currentTheme = useSelector(themeSlice.actions.getTheme);

  const theme = useMemo(() => {
    currentTheme.payload;
  }, [currentTheme]);

  return (
    <div>
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.theams} element={<Theams />} />
      </Routes>
    </div>
  );
};
