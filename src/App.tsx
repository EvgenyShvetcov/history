import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Theams } from "./components/Theams/Theams";
import { ROUTES } from "./routes";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.home} element={<MainPage />} />
        <Route path={ROUTES.theams} element={<Theams />} />
      </Routes>
    </div>
  );
};
