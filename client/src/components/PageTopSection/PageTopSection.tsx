import { FC } from "react";

import style from "./PageTopSection.module.scss";
import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  onClickBack: () => void;
  title: string;
}

export const PageTopSection: FC<Props> = ({ children, onClickBack, title }) => {
  return (
    <div className={style.topPart}>
      <div className={style.topLeftPart}>
        <div className={style.IconBack}>
          <ArrowBack onClick={onClickBack} className={style.IconBack} />
        </div>
        <Typography variant="h3">{title}</Typography>
      </div>
      {children}
    </div>
  );
};
