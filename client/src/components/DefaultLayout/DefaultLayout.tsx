import { FC } from "react";
import { TopBar } from "../TopBar/TopBar";
import "./DefaultLayout.scss";

interface Props {
  children: React.ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <TopBar />
      <div className="content">{children}</div>
    </div>
  );
};
