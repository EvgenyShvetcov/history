import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <DefaultLayout
      children={
        <div>
          <h1>Заголовок</h1>
          <div>Описание</div>
        </div>
      }
    ></DefaultLayout>
  );
};
