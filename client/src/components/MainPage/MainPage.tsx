import { Typography } from "@mui/material";
import { DefaultLayout } from "../DefaultLayout/DefaultLayout";
import "./MainPage.scss";
import { FC } from "react";

export const MainPage: FC = () => {
  return (
    <DefaultLayout
      children={
        <div>
          <Typography variant="h3">Заголовок</Typography>
          <div className="discription">
            Исто́рия (др.-греч. ἱστορία) — наука, исследующая прошлое, реальные
            факты и закономерности смены исторических событий, эволюцию общества
            и отношений внутри него, обусловленных человеческой деятельностью на
            протяжении многих поколений. В наши дни появилось новое определение
            истории как науки «о прошлой социальной реальности». В более узком
            смысле история — наука, изучающая всевозможные источники о прошлом
            для того, чтобы установить последовательность событий, объективность
            описанных фактов и сделать выводы о причинах событий
          </div>
        </div>
      }
    ></DefaultLayout>
  );
};
