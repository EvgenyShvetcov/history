import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { Theams } from "./components/Theams/Theams";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="one" element={<MainPage />} />
          <Route path="two" element={<Theams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
