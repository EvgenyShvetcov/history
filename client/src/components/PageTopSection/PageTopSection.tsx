import { FC } from "react";

import "./PageTopSection.scss";
import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  onClickBack: () => void;
  title: string;
}

export const PageTopSection: FC<Props> = ({ children, onClickBack, title }) => {
  return (
    <div className="topPart">
      <div className="topLeftPart">
        <div className="IconBack">
          <ArrowBack onClick={onClickBack} className="IconBack" />
        </div>
        <Typography variant="h3">{title}</Typography>
      </div>
      {children}
    </div>
  );
};
