import { Switch } from "@mui/material";
import "./TopBar.scss";

import { useDispatch } from "react-redux";
import { themeSlice } from "../../store/redux/theme";
import { Link } from "react-router-dom";

export const TopBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <Link to="/theams" className="topbarPart">
        Разделы
      </Link>
      <div className="topbarPart">
        Тёмная тема :
        <Switch
          onChange={() => {
            dispatch(themeSlice.actions.changeTheme());
          }}
        />
      </div>
    </div>
  );
};
