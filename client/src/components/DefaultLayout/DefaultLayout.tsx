import { FC } from "react";
import { TopBar } from "../TopBar/TopBar";
import style from "./DefaultLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className={style.layout}>
      <TopBar />
      <div className={style.content}>{children}</div>
    </div>
  );
};
